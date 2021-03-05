from .db import db
from datetime import datetime
from .companies import Company
from .techcategories import TechCategory


class Opportunity(db.Model):
    __tablename__ = "opportunities"

    id = db.Column(db.Integer, primary_key=True)
    recruiterId = db.Column(
        db.Integer, db.ForeignKey("users.id"), nullable=False)
    techCategoryId = db.Column(db.Integer, db.ForeignKey(
        "techcategories.id"), nullable=False)
    companyId = db.Column(db.Integer, db.ForeignKey(
        "companies.id"), nullable=False)
    jobsummary = db.Column(db.String(5000))
    createdat = db.Column(db.DateTime, index=True, default=datetime.utcnow)
    updatedat = db.Column(db.DateTime, index=True, default=datetime.utcnow)
    timeStamp = db.Column(db.DateTime, index=True, default=datetime.utcnow)
    companyImgUrl = db.Column(db.String(2000))

    recruiter = db.relationship("User", back_populates="opportunities")
    techCategory = db.relationship("TechCategory")
    company = db.relationship("Company")

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
            "recruiter": self.recruiter.to_dict(),
            "techcategory": self.techCategory.name,
            "company": self.company.name
        }
