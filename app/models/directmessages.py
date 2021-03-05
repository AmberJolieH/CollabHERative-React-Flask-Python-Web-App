from .db import db
from datetime import datetime

class DirectMessage (db.Model):
    __tablename__ = "directmessages"

    id = db.Column(db.Integer, primary_key=True)
    senderid = db.Column(db.Integer, db.ForeignKey("users.id"), nullable=False)
    recieverid = db.Column(db.Integer, db.ForeignKey("users.id"), nullable=False)
    message = db.Column(db.String(500))
    viewstatus = db.Column(db.Boolean)
    


    def to_dict(self):
        return {
            "id": self.id,
            "userid": self.userid,
            "recieverid":self.recieverid,
            "message":self.message,
            "viewstatus":self.viewstatus,
        }