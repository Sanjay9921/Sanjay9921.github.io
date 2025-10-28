# backend/models/contact.py

from flask_sqlalchemy import SQLAlchemy
from . import db

class Contact(db.Model):
    contact_id = db.Column(db.Integer, primary_key=True)
    contact_email = db.Column(db.String, nullable=False)
    contact_phone = db.Column(db.String, nullable=True)