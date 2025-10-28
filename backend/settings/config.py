import os

# Define base directory relative to this file
basedir = os.path.abspath(os.path.dirname(__file__))

# Custom folder for SQLite database (e.g. 'data' folder)
DB_FOLDER = os.path.join(basedir, 'data')

# Ensure folder exists
os.makedirs(DB_FOLDER, exist_ok=True)

# Database file name
DB_FILENAME = 'portfolio.db'

# Full DB URI path
SQLALCHEMY_DATABASE_URI = f"sqlite:///{os.path.join(DB_FOLDER, DB_FILENAME)}"

SQLALCHEMY_TRACK_MODIFICATIONS = False