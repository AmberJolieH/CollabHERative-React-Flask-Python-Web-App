from flask_wtf import FlaskForm
from wtforms import StringField, IntegerField
from wtforms.validators import DataRequired, Length


class CreateChatForm(FlaskForm):
    senderId = IntegerField("senderid", validators=[DataRequired()])
    receiverId = IntegerField("receiverid", validators=[DataRequired()])
    message = StringField(
        "message",
        validators=[
            DataRequired(message="may not be empty"),
            Length(min=1, max=500, message="must be less than 500 characters"),
        ],
    )
