from .db import db
from datetime import datetime


class DirectMessage (db.Model):
    __tablename__ = "directmessages"

    id = db.Column(db.Integer, primary_key=True)
    senderid = db.Column(db.Integer, db.ForeignKey("users.id"), nullable=False)
    receiverid = db.Column(
        db.Integer, db.ForeignKey("users.id"), nullable=False)
    message = db.Column(db.String(500))
    viewstatus = db.Column(db.Boolean)
    timestamp = db.Column(db.DateTime, index=True, default=datetime.utcnow)

    sender = db.relationship(
        "User", foreign_keys=[senderid], back_populates="messages_sent"
    )
    receiver = db.relationship(
        "User", foreign_keys=[receiverid], back_populates="messages_received"
    )

    def to_dict(self):
        return {
            "id": self.id,
            "senderid": self.senderid,
            "receiverid": self.receiverid,
            "message": self.message,
            "viewstatus": self.viewstatus,
            "timestamp": self.timestamp,
        }
