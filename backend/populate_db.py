# populate_db.py

from main import app
from models.home import Home
from models.about import Education, Experience
from models.skills import Skill
from models.projects import Project
from models.contact import Contact
from models import db
import json
from dotenv import load_dotenv
import os

load_dotenv()

with app.app_context():
    # Create all tables
    db.create_all()

    # Optional: Clear existing data for a fresh start
    Home.query.delete()
    Education.query.delete()
    Experience.query.delete()
    Skill.query.delete()
    Project.query.delete()
    Contact.query.delete()
    db.session.commit()

    # Populate Home
    home = Home(
        home_name=os.getenv('HOME_NAME'),
        home_desc=os.getenv('HOME_DESC'),
        home_img=os.getenv('HOME_IMG')
    )
    db.session.add(home)

    # Populate Education
    edu1 = Education(
        edu_degree=os.getenv('EDU1_DEGREE'),
        edu_university=os.getenv('EDU1_UNIVERSITY'),
        edu_place=os.getenv('EDU1_PLACE'),
        edu_desc=os.getenv('EDU1_DESC'),
        edu_years=os.getenv('EDU1_YEARS')
    )

    edu2 = Education(
        edu_degree=os.getenv('EDU2_DEGREE'),
        edu_university=os.getenv('EDU2_UNIVERSITY'),
        edu_place=os.getenv('EDU2_PLACE'),
        edu_desc=os.getenv('EDU2_DESC'),
        edu_years=os.getenv('EDU2_YEARS')
    )
    
    db.session.add_all([edu1, edu2])

    # Populate Experience
    xp1 = Experience(
        xp_title=os.getenv('XP1_TITLE'),
        xp_company=os.getenv('XP1_COMPANY'),
        xp_place=os.getenv('XP1_PLACE'),
        xp_desc=json.dumps(os.getenv('XP1_DESC')),
        xp_years=os.getenv('XP1_YEARS')
    )

    xp2 = Experience(
        xp_title=os.getenv('XP2_TITLE'),
        xp_company=os.getenv('XP2_COMPANY'),
        xp_place=os.getenv('XP2_PLACE'),
        xp_desc=json.dumps(os.getenv('XP2_DESC')),
        xp_years=os.getenv('XP2_YEARS')
    )

    xp3 = Experience(
        xp_title=os.getenv('XP3_TITLE'),
        xp_company=os.getenv('XP3_COMPANY'),
        xp_place=os.getenv('XP3_PLACE'),
        xp_desc=json.dumps(os.getenv('XP3_DESC')),
        xp_years=os.getenv('XP3_YEARS')
    )

    xp4 = Experience(
        xp_title=os.getenv('XP4_TITLE'),
        xp_company=os.getenv('XP4_COMPANY'),
        xp_place=os.getenv('XP4_PLACE'),
        xp_desc=json.dumps(os.getenv('XP4_DESC')),
        xp_years=os.getenv('XP4_YEARS')
    )

    db.session.add_all([xp1, xp2, xp3, xp4])

    # Populate Projects
    proj1 = Project(
        project_name=os.getenv("PROJ1_NAME"),
        project_desc=os.getenv("PROJ1_DESC"),
        project_link=os.getenv("PROJ1_LINK")
    )

    proj2 = Project(
        project_name=os.getenv("PROJ2_NAME"),
        project_desc=os.getenv("PROJ2_DESC"),
        project_link=os.getenv("PROJ2_LINK")
    )

    proj3 = Project(
        project_name=os.getenv("PROJ3_NAME"),
        project_desc=os.getenv("PROJ3_DESC"),
        project_link=os.getenv("PROJ3_LINK")
    )

    proj4 = Project(
        project_name=os.getenv("PROJ4_NAME"),
        project_desc=os.getenv("PROJ4_DESC"),
        project_link=os.getenv("PROJ4_LINK")
    )

    db.session.add_all([proj1, proj2, proj3, proj4])

    # Populate Skills
    skill1 = Skill(
        skill_category="Programming Languages",
        skill_name=json.dumps([
            "Python",
            "Java",
            "C++",
            "C",
            "R",
            "YAML",
            "Markdown",
            "HTML5",
            "React.js",
            "Javascript"
        ])
    )

    skill2 = Skill(
        skill_category="Frameworks",
        skill_name=json.dumps([
            "PySpark",
            "Beautiful Soup",
            "Django",
            "Docker",
            "FastAPI",
            "Flask",
            "Keras",
            "LangChain",
            "NLTK",
            "Transformer",
            "Matplotlib",
            "Seaborn",
            "NumPy",
            "Pandas",
            "PyTorch",
            "REST API",
            "Scikit-Learn",
            "Open CV",
            "Selenium",
            "Spacy",
            "TensorFlow",
            "Plotly"
        ])
    )

    skill3 = Skill(
        skill_category="Databases",
        skill_name=json.dumps([
            "MySQL",
            "PostgreSQL",
            "Oracle",
            "MongoDB",
            "Firebase",
            "Pickle",
            "JSON",
            "XML"
        ])
    )

    skill4 = Skill(
        skill_category="Cloud",
        skill_name=json.dumps([
            "Microsoft Azure",
            "Amazon Web Services (AWS)"
        ])
    )

    skill5 = Skill(
        skill_category="Spoken Languages",
        skill_name=json.dumps(os.getenv("SPOKEN_LANGUAGES"))
    )

    db.session.add_all([skill1, skill2, skill3, skill4, skill5])

    
    # Populate Contact
    contact = Contact(
        contact_email = os.getenv("CONTACT_EMAIL"),
        contact_phone = os.getenv("CONTACT_PHONE"),
        contact_linkedin = os.getenv("CONTACT_LINKEDIN"),
        contact_github = os.getenv("CONTACT_GITHUB"),
        contact_kaggle = os.getenv("CONTACT_KAGGLE")
    )
    db.session.add(contact)

    # Commit all changes
    db.session.commit()

    print("Database has been populated with actual data from '.env' file.")
