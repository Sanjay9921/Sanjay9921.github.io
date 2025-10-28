# backend/models/__init__.py

from flask_sqlalchemy import SQLAlchemy

db = SQLAlchemy()

# Import Portfolio Sections
from .home import Home
from .about import Education, Experience
from .skills import Skill
from .projects import Project
from .contact import Contact