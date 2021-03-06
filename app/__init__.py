# APP SETUP
import os
from flask import Flask, render_template, request, session, redirect
from flask_cors import CORS
from flask_migrate import Migrate
from flask_wtf.csrf import CSRFProtect, generate_csrf
from flask_login import LoginManager
from flask_socketio import SocketIO, send, emit
import json

# ROUTES & DB
from .models import db, User, DirectMessage
from .api.user_routes import user_routes
from .api.auth_routes import auth_routes
from .api.showcase_routes import showcase_routes
from .api.chat_routes import chat_routes
from .seeds import seed_commands

from .config import Config

app = Flask(__name__)

# run app with socketio
if __name__ == '__main__':
    socketio.run(app)

# Setup login manager
login = LoginManager(app)
login.login_view = 'auth.unauthorized'

# socketio setup -> server using socket and fix cors erros
socketio = SocketIO(app, cors_allowed_origins="*")

# message handler function will be called and send
# -> message to every client on the server


@socketio.on("message")
def handleMessage(msg):
    msg = json.loads(msg)
    message, senderid, recieverid = msg.values()

    message = DirectMessage(message=message, senderid=senderid,
                            recieverid=recieverid)
    db.session.add(message)
    db.session.commit()
    emit('message', {'msg': message.to_dict(), })
    print('recieved message' + message.message)


@login.user_loader
def load_user(id):
    return User.query.get(int(id))


# Tell flask about our seed commands
app.cli.add_command(seed_commands)

app.config.from_object(Config)
app.register_blueprint(user_routes, url_prefix='/api/users')
app.register_blueprint(auth_routes, url_prefix='/api/auth')
app.register_blueprint(showcase_routes, url_prefix='/api/showcases')
app.register_blueprint(chat_routes, url_prefix='/api/chat')
db.init_app(app)
Migrate(app, db)

# Application Security
CORS(app)

# Since we are deploying with Docker and Flask,
# we won't be using a buildpack when we deploy to Heroku.
# Therefore, we need to make sure that in production any
# request made over http is redirected to https.
# Well.........


@app.before_request
def https_redirect():
    if os.environ.get('FLASK_ENV') == 'production':
        if request.headers.get('X-Forwarded-Proto') == 'http':
            url = request.url.replace('http://', 'https://', 1)
            code = 301
            return redirect(url, code=code)


@app.after_request
def inject_csrf_token(response):
    response.set_cookie('csrf_token',
                        generate_csrf(),
                        secure=True if os.environ.get(
                            'FLASK_ENV') == 'production' else False,
                        samesite='Strict' if os.environ.get(
                            'FLASK_ENV') == 'production' else None,
                        httponly=True)
    return response


@app.route('/', defaults={'path': ''})
@app.route('/<path:path>')
def react_root(path):
    print("path", path)
    if path == 'favicon.ico':
        return app.send_static_file('favicon.ico')
    return app.send_static_file('index.html')
