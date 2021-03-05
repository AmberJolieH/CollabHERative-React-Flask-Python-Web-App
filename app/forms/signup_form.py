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


class SignUpForm(FlaskForm):
    username = StringField('username', validators=[DataRequired()])
    firstname = StringField('firstname', validators=[DataRequired()])
    lastname = StringField('lastname', validators=[DataRequired()])
    middlename = StringField('middlename', validators=[DataRequired()])
    driverslicense = IntegerField(validators=[DataRequired()])
    email = StringField('email', validators=[DataRequired(), user_exists])
    password = StringField('password', validators=[DataRequired()])
    githuburl = StringField(validators=[DataRequired()])
    isallies = BooleanField(validators=[DataRequired()])
    isrecruiter = BooleanField(validators=[DataRequired()])
    techcategoryid = IntegerField(validators=[DataRequired()])
    imgurl = StringField(validators=[DataRequired()])
    resumeUrl = StringField(validators=[DataRequired()])
    userskill = StringField(validators=[DataRequired()])
