from .db import db


class TechCategory (db.Model):
    __tablename__ = "techcategories"

    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(50))

    def to_dict(self):
        return {
            "id": self.id,
            "name": self.name
        }
