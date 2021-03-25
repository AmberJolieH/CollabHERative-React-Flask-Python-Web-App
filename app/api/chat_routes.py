# IMPORTS
from app.models import DirectMessage, db
from flask import Blueprint, jsonify, request
from flask_login import login_required
from app.forms import CreateChatForm
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
def get_messages():
    """
    Get all messages
    """
    messages = DirectMessage.query.all()
    return {"messages": [message.to_dict() for message in messages]}

# CREATE A NEW MESSAGE


@chat_routes.route("", methods=["POST"])
@login_required
def create_message():
    """
    Create new message
    """
    form = CreateChatForm()
    form["csrf_token"].data = request.cookies["csrf_token"]

    if form.validate_on_submit():
        new_message = DirectMessage(
            senderid=form.data["senderId"],
            receiverid=form.data["receiverId"],
            message=form.data["message"],
        )
        db.session.add(new_message)
        db.session.commit()
        return new_message.to_dict()
    errors = validation_errors_to_error_messages(form.errors)
    return {"errors": errors}

# DELETE A MESSAGE


@chat_routes.route("/<messageId>", methods=["DELETE"])
@login_required
def delete_message(messageId):
    """
    Delete message
    """
    message_to_delete = DirectMessage.query.get(messageId)
    if message_to_delete:
        db.session.delete(message_to_delete)
        db.session.commit()
        return "Deleted"
    else:
        print(f"-------- no message found  -------- ")
        return {"errors": "No message found with given id"}
