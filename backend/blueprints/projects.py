# backend/blueprints/project.py

from flask import Blueprint, jsonify
from models.projects import Project

projects_bp = Blueprint('projects_bp', __name__, url_prefix='/api/projects')

@projects_bp.route('/')
def get_projects():
    projects_info = Project.query.all()
    if projects_info:
        return jsonify({
            "projects": [{"project_name": p.project_name, "project_desc": p.project_desc, "project_link": p.project_link} for p in projects_info]
        })
    return jsonify({"message": "Missing 'projects' information"}), 404
