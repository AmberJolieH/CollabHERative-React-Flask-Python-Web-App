# IMPORTS
from app.models import DirectMessage
from flask import Blueprint, jsonify, request
from flask_login import login_required
# BLUEPRINT
chat_routes = Blueprint('chat', __name__)

# GET ALL MESSAGES


# @chat_routes.route('/users/<int:id>')
# @login_required
# def getChat(id):
#     messages = DirectMessage.query.filter_by(chat_id=id).all()
#     return {id: [message.to_dict() for message in messages]}

@chat_routes.route("")
@login_required
def get_chats():
    """
    Get all messages
    """
    messages = Message.query.all()
    return {"messages": [message.to_dict() for message in messages]}

# CREATE A NEW MESSAGE


@chat_routes.route("", methods=["POST"])
@login_required
def create_chat():
    """
    Create new message
    """
    form = CreateMessageForm()
    form["csrf_token"].data = request.cookies["csrf_token"]

    if form.validate_on_submit():
        new_message = Message(
            senderId=form.data["senderId"],
            receiverId=form.data["receiverId"],
            message=form.data["message"],
        )
        db.session.add(new_message)
        db.session.commit()
        return new_message.to_dict()
    errors = validation_errors_to_error_messages(form.errors)
    return {"errors": errors}
