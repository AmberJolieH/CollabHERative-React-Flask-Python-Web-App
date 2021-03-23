from flask_wtf import FlaskForm
from wtforms import StringField, IntegerField
from wtforms.validators import DataRequired, Length


class CreateMessageForm(FlaskForm):
    senderid = IntegerField("senderId", validators=[DataRequired()])
    receiverId = IntegerField("rec")