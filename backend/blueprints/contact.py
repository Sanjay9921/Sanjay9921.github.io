# backend/blueprints/contact.py

from flask import Blueprint, jsonify
from models.contact import Contact

contact_bp = Blueprint('contact_bp', __name__, url_prefix='/api/contact')

@contact_bp.route('/')
def get_contact():
    contact_info = Contact.query.first()
    if contact_info:
        return jsonify({"contact_email": contact_info.contact_email, "contact_phone": contact_info.contact_phone, "contact_linkedin": contact_info.contact_linkedin, "contact_github": contact_info.contact_github, "contact_kaggle": contact_info.contact_kaggle})
    return jsonify({"message": "Missing 'contact' information"}), 404
