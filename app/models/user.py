from .db import db
from werkzeug.security import generate_password_hash, check_password_hash
from flask_login import UserMixin
from .userskills import UserSkill


class User(db.Model, UserMixin):
    __tablename__ = 'users'

    id = db.Column(db.Integer, primary_key=True)
    username = db.Column(db.String(40), unique=True)
    firstname = db.Column(db.String(40), nullable=False)
    lastname = db.Column(db.String(40), nullable=False)
    middleinitial = db.Column(db.String(40))
    email = db.Column(db.String(255), nullable=False, unique=True)
    hashed_password = db.Column(db.String(255), nullable=False)
    githuburl = db.Column(db.String(2000))
    isallies = db.Column(db.Boolean)
    isrecruiter = db.Column(db.Boolean)
    techcategoryid = db.Column(db.Integer)
    imgurl = db.Column(db.String(2000))
    resumeUrl = db.Column(db.String(2000))
    userskill = db.Column(db.String(2000))

    showcases = db.relationship(
        "Showcase", back_populates="user"
    )

    opportunities = db.relationship(
        "Opportunity", back_populates="recruiter"
    )

    skills = db.relationship(
        "Skill", secondary="userskills"
    )
    messages_sent = db.relationship(
        "DirectMessage", foreign_keys="DirectMessage.senderid", back_populates="sender"
    )
    messages_received = db.relationship(
        "DirectMessage", foreign_keys="DirectMessage.receiverid", back_populates="receiver"
    )

    @property
    def password(self):
        return self.hashed_password

    @password.setter
    def password(self, password):
        self.hashed_password = generate_password_hash(password)

    def check_password(self, password):
        return check_password_hash(self.password, password)

    def to_dict(self):
        return {
            "id": self.id,
            "username": self.username,
            "email": self.email,
            "firstname": self.firstname,
            "lastname": self.lastname,
            "middle": self.middleinitial,
            "githuburl": self.githuburl,
            "isallies": self.isallies,
            "isrecruiter": self.isrecruiter,
            "techcategoryid": self.techcategoryid,
            "imgurl": self.imgurl,
            "resumeUrl": self.resumeUrl
        }
