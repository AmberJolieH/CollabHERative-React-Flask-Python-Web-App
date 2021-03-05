from flask_wtf import FlaskForm
from wtforms import StringField, IntegerField, BooleanField
from wtforms.validators import DataRequired, Email, ValidationError
from app.models import User


def user_exists(form, field):
    print("Checking if user exits", field.data)
    email = field.data
    user = User.query.filter(User.email == email).first()
    if user:
        raise ValidationError("User is already registered.")


class ShowcaseForm(FlaskForm):
    techCategoryId = IntegerField(validators=[DataRequired()])
    description = StringField(validators=[DataRequired()])
    skill = StringField(validators=[DataRequired()])

