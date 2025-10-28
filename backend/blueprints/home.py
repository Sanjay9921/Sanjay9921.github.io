# backend/blueprints/home.py

from flask import Blueprint, jsonify
from models.home import Home

home_bp = Blueprint('home_bp', __name__, url_prefix='/api/home')

@home_bp.route('/')
def get_home():
    home_info = Home.query.first()
    if home_info:
        return jsonify({
            "home_name": home_info.home_name,
            "home_desc": home_info.home_desc,
            "image_url": home_info.home_img
        })
    return jsonify({"message": "No personal info found"}), 404
