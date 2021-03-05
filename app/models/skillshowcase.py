from .db import db


class Skillshowcase(db.Model):
    __tablename__ = "skillshowcases"

    id = db.Column(db.Integer, primary_key=True)
    showcaseid = db.Column(db.Integer, db.ForeignKey("showcases.id"), nullable=False)
    skillsid = db.Column(db.Integer, db.ForeignKey("skills.id"), nullable=False)
    




    def to_dict(self):
        return {
            "id": self.id,
            "showcaseid": self.showcaseid,
            "skillsid": self.skillsid
            
        }