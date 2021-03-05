from .db import db


class Opportunityskill (db.Model):
    __tablename__ = "opportunitityskills"

    id = db.Column(db.Integer, primary_key=True)
    opportunitiesId = db.Column(db.Integer, db.ForeignKey("opportunities.id"), nullable=False)
    skillsid = db.Column(db.Integer, db.ForeignKey("skills.id"), nullable=False)
    


    def to_dict(self):
        return {
            "id": self.id,
            "opportunitiesId": self.opportunitiesId,
            "skillsid": self.skillsid
        }