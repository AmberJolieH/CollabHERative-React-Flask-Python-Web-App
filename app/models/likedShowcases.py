from .db import db


class likedShowcases(db.Model):
    __tablename__ = "likedShowcases"

    id = db.Column(db.Integer, primary_key=True)
    showcaseid = db.Column(db.Integer, db.ForeignKey("showcases.id"), nullable=False)
    userId = db.Column(db.Integer, db.ForeignKey("users.id"), nullable=False)
    




    def to_dict(self):
        return {
            "id": self.id,
            "showcaseid": self.showcaseid,
            "userid": self.userid
            
        }