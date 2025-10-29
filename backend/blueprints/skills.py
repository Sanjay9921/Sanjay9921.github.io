# backend/blueprints/skills.py

from flask import Blueprint, jsonify
from models.skills import Skill

skills_bp = Blueprint('skills_bp', __name__, url_prefix='/api/skills')

@skills_bp.route('/')
def get_skills():
    skill_info = Skill.query.all()
    if skill_info:
        return jsonify({
            "skills": [{"skill_category": s.skill_category, "skill_name": s.skill_name} for s in skill_info]
        })
    return jsonify({"message": "Missing 'skills' information"}), 404
