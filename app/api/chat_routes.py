from app.models import DirectMessage

chat_routes = Blueprint('conversations',__name__)


@chat_routes.route('users/<int:id>')
@login_required
def getChat(id):
    messages = Message.query.filter_by(chat_id=id).all()
    return {id: [message.to_dict(current_user) for message in messages]}
    

    