# Use an official Python base image
FROM python:3.11-slim

# Set working directory
WORKDIR /app

# Copy backend code into container
COPY . /app

# Install dependencies
RUN pip install --upgrade pip \
    && pip install -r requirements.txt

# Use bash to run commands: populate DB, then start Flask app
CMD ["bash", "-c", "python populate_db.py && python main.py"]