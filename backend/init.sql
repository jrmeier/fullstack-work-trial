-- Create a new user
CREATE ROLE fullstack_work_trial_user WITH LOGIN PASSWORD 'SomeB1Glongp@$$worD';

-- Create a new database
CREATE DATABASE fullstack_work_trial;

-- Grant all privileges on the database to the new user
GRANT ALL PRIVILEGES ON DATABASE fullstack_work_trial_user TO fullstack_work_trial;

CREATE TABLE IF NOT EXISTS users (
    id SMALLINT NOT NULL UNIQUE PRIMARY KEY,
    name VARCHAR(200) NOT NULL,
    company VARCHAR(200) NOT NULL,
    email VARCHAR(255) NOT NULL,
    phone VARCHAR(55) NOT NULL
)
