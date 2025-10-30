# main.py

# Imports
from flask import Flask, jsonify
from flask_cors import CORS
from models import db
from blueprints.home import home_bp
from blueprints.about import about_bp
from blueprints.skills import skills_bp
from blueprints.projects import projects_bp
from blueprints.contact import contact_bp
from settings import config

# Register CORS to app
app = Flask(__name__)
app.config.from_object(config)
CORS(app)
db.init_app(app)

# Register blueprints for modular routes
app.register_blueprint(home_bp)
app.register_blueprint(about_bp)
app.register_blueprint(skills_bp)
app.register_blueprint(projects_bp)
app.register_blueprint(contact_bp)

# Simple health check
@app.route("/")
def check_health():
    return jsonify({"message": "I am Ryan Gosling from Blade Runner 2049."})

# Run App
if __name__ == "__main__":
    with app.app_context():
        db.create_all()  # Ensures tables exist before starting server
    app.run(host="0.0.0.0", port=5000, debug=True)