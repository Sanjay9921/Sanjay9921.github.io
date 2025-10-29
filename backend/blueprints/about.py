# backend/blueprints/about.py

from flask import Blueprint, jsonify
from models.about import Education, Experience

about_bp = Blueprint('about_bp', __name__, url_prefix='/api/about')

@about_bp.route('/')
def get_about():
    edu_info = Education.query.all()
    xp_info = Experience.query.all()
    if edu_info and xp_info:
        return jsonify({
            "education": [{"edu_degree": e.edu_degree, "edu_university": e.edu_university, "edu_place":e.edu_place, "edu_desc":e.edu_desc, "edu_years": e.edu_years} for e in edu_info],
            "experience": [{"xp_title": x.xp_title, "xp_company": x.xp_company, "xp_place":x.xp_place, "xp_desc":x.xp_desc, "xp_years": x.xp_years} for x in xp_info]
        })
    return jsonify({"message": "Missing 'about' information"}), 404
