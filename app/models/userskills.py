from .db import db
from .skills import Skill


class UserSkill (db.Model):
    __tablename__ = "userskills"

    id = db.Column(db.Integer, primary_key=True)
    userId = db.Column(db.Integer, db.ForeignKey("users.id"), nullable=False)
    skillsid = db.Column(db.Integer, db.ForeignKey(
        "skills.id"), nullable=False)

    skill = db.relationship("Skill")
    user = db.relationship("User")

    def to_dict(self):
        return {
            "id": self.id,
            "userid": self.userid,
            "skillsid": self.skillsid
        }
