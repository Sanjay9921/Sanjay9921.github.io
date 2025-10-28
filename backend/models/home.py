# backend/models/home.py

from flask_sqlalchemy import SQLAlchemy
from . import db

class Home(db.Model):
    home_id = db.Column(db.Integer, primary_key=True)
    home_name = db.Column(db.String, nullable=False) # First Name, Last Name
    home_desc = db.Column(db.String, nullable=False)
    home_img = db.Column(db.String, nullable=False)