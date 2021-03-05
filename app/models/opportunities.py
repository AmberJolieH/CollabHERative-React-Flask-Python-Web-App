from .db import db


class Showcase(db.Model):
    __tablename__ = "showcases"

    id = db.Column(db.Integer, primary_key=True)
    recruiterId = db.Column(db.Integer, db.ForeignKey("users.id"), nullable=False)
    techCategoryId = db.Column(db.Integer, db.ForeignKey("users.techCategoryId"), nullable=False)
    companyId = db.Column(db.Integer, db.ForeignKey("companies.companyid"), nullable=False)
    jobsummary = db.Column(db.String(5000)
    createdat = db.Column(db.DateTime, index=True, default=datetime.utcnow)
    updatedat = db.Column(db.DateTime, index=True, default=datetime.utcnow)
    timeStamp = db.Column(db.DateTime, index=True, default=datetime.utcnow)
    companyImgUrl = description = db.Column(db.String(2000)
    




    def to_dict(self):
        return {
            "id": self.id,
            "recruiterId": self.recruiterId,
            "techCategoryId": self.techCategoryId,
            "companyId": self.companyId,
            "jobsummary": self.jobsummary,
            "createdat": self.createdat,
            "updatedat": self.updatedat.to_dict(),
            "timestamp": self.timestamp,
            "companyImgUrl": self.companyImgUrl,
        }