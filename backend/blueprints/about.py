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
            "education": [{"edu_degree": e.degree, "edu_university": e.institution, "edu_years": e.years} for e in edu_info],
            "experience": [{"xp_title": x.title, "xp_company": x.company, "xp_years": x.duration} for x in xp_info]
        })
    return jsonify({"message": "Missing 'about' information"}), 404
