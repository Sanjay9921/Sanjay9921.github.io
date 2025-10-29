# backend/models/about.py

from flask_sqlalchemy import SQLAlchemy
from . import db

class Education(db.Model):
    edu_id = db.Column(db.Integer, primary_key = True)
    edu_degree = db.Column(db.String, nullable = False)
    edu_university = db.Column(db.String, nullable = False)
    edu_place = db.Column(db.String, nullable = False)
    edu_desc = db.Column(db.String, nullable = False)
    edu_years = db.Column(db.String, nullable = False)

class Experience(db.Model):
    xp_id = db.Column(db.Integer, primary_key = True)
    xp_title = db.Column(db.String, nullable = False)
    xp_company = db.Column(db.String, nullable = False)
    xp_place = db.Column(db.String, nullable = False)
    xp_desc = db.Column(db.String, nullable = False)
    xp_years = db.Column(db.String, nullable = False)