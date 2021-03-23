from app.models import DirectMessage
from flask import Blueprint
chat_routes = Blueprint('chat',__name__)
from flask_login import login_required


@chat_routes.route('/users/<int:id>')
@login_required
def getChat(id):
    messages = DirectMessage.query.filter_by(chat_id=id).all()
    return {id: [message.to_dict() for message in messages]}


    