# backend/models/skills.py

from flask_sqlalchemy import SQLAlchemy
from . import db

class Skill(db.Model):
    skill_id = db.Column(db.Integer, primary_key = True)
    skill_category = db.Column(db.String, nullable = False)
    skill_name = db.Column(db.String, nullable = False)