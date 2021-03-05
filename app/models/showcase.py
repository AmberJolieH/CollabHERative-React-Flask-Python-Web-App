from .db import db
from datetime import datetime


class Showcase(db.Model):
    __tablename__ = "showcases"

    id = db.Column(db.Integer, primary_key=True)
    userId = db.Column(db.Integer, db.ForeignKey("users.id"), nullable=False)
    techCategoryId = db.Column(db.Integer, db.ForeignKey("techCategories.id"), nullable=False)
    description = db.Column(db.String(5000))
    createdat = db.Column(db.DateTime, index=True, default=datetime.utcnow)
    updatedat = db.Column(db.DateTime, index=True, default=datetime.utcnow)
    timeStamp = db.Column(db.DateTime, index=True, default=datetime.utcnow)
    showcaseImgUrl = db.Column(db.String(2000))
    




    def to_dict(self):
        return {
            "id": self.id,
            "userId": self.userId,
            "techCategoryId": self.techCategoryId,
            "description": self.description,
            "createdat": self.createdat,
            "updatedat": self.updatedat,
            "timestamp": self.timestamp,
            "showcaseImgUrl": self.showcaseImgUrl,
        }