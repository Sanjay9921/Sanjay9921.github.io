# backend/models/project.py

from flask_sqlalchemy import SQLAlchemy
from . import db

class Project(db.Model):
    project_id = db.Column(db.Integer, primary_key=True)
    project_name = db.Column(db.String, nullable=False)
    project_desc = db.Column(db.String, nullable=False)
    project_link = db.Column(db.String, nullable=False)