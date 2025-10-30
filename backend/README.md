# Backend - Portfolio API

This is the Flask backend API for the portfolio web application. It provides modular endpoints for Home, About, Skills, Projects, and Contact sections using Flask Blueprints and SQLAlchemy.

## Features

* Modular Flask app with Blueprints
* SQLite database powered by SQLAlchemy
* Environment-based configuration with .env support
* Database population script for initial data seeding
* Dockerized app with support for environment variables
* CORS enabled for frontend integration

## Getting Started

### Prerequisites

* Python 3.11+
* ``pip`` package manager
* Docker and Docker Compose (optional, for local containerized usage)

### Installation

1. Clone the repository and navigate to the backend folder:

```bash
git clone <repo_url>
cd backend
```

2. Create and activate a virtual environment:

```bash
python -m venv venv
source venv/bin/activate     # Linux/macOS
venv\Scripts\activate        # Windows
```

3. Install required dependencies:

```bash
pip install -r requirements.txt
```

4. Create a ``.env`` file in the backend directory with variables like:

```text
CONTACT_EMAIL=youremail@example.com
CONTACT_PHONE=+1234567890
# Add other environment variables needed for populate_db.py
```

## Usage (Local)

### Database Population

To seed your database with initial data, run:
```bash
python populate_db.py
```

### Running the Backend Server

Start the Flask app with:

```bash
python main.py
```

The API will be available at ``http://localhost:5000``.

## Usage (Docker Compose)

1. Build and Run with Docker Compose
2. Make sure you have Docker and Docker Compose installed.
3. Run the backend container:

```bash
docker-compose -f docker-compose.backend.yml up --build
```

4. This builds the image, runs populate_db.py to seed the database, then starts the backend API server.

## Project Structure

### File Details

* ``main.py`` - Entry point for the application; creates the Flask app, sets up database, and registers blueprints for routing
* ``models/`` - Contains Python classes (SQLAlchemy models) that define the database schema for each portfolio section.
* ``blueprints/`` - Houses modular Flask route handlers grouped by feature (about, contact, home, etc.), each as a separate blueprint.
* ``settings/`` - Includes configuration files and persistent data (database); central place for app settings and storage.
* ``populate_db.py`` - Script for seeding the database with initial or example portfolio data.
* ``Dockerfile`` - Instructions for building a Docker image to run the backend as a container.
* ``docker-compose.backend.yml`` - Orchestrates backend containers and dependencies (e.g., environment variables, data volumes) using Docker Compose.

### Folder Structure

```text
backend/
│
├── blueprints/
│   ├── __init__.py
│   ├── about.py
│   ├── contact.py
│   ├── home.py
│   ├── projects.py
│   ├── skills.py
│   ├── images/
│   │   └── profile_pic.jpg
│
├── models/
│   ├── __init__.py
│   ├── about.py
│   ├── contact.py
│   ├── home.py
│   ├── projects.py
│   ├── skills.py
│
├── settings/
│   ├── config.py
│   ├── data/
│   │   └── portfolio.db
│
├── main.py
├── populate_db.py
├── requirements.txt
├── Dockerfile
├── docker-compose.backend.yml
├── .env
└── README.md
```

## Environment Variables

Sensitive info like email and phone used by ``populate_db.py`` are managed via ``.env`` file to keep secrets out of source control.

## Notes

* Flask app runs on ``0.0.0.0`` host inside Docker for external access.
* Database file ``portfolio.db`` is persisted via Docker volume.
* Modify ``.env`` and ``populate_db.py`` as needed to adjust initial data.