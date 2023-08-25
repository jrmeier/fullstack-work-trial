DO $$ 
BEGIN 
    -- Check if the role does not exist
    IF NOT EXISTS (SELECT FROM pg_roles WHERE rolname = 'work_trial_user') THEN
        -- Create a new user
        CREATE ROLE work_trial_user WITH LOGIN PASSWORD 'lk123je6e9y342a2dccadf5ai5eu5g55mh';
    END IF;
END $$;

DO $$
BEGIN
    -- Check if the database does not exist
    IF NOT EXISTS (SELECT FROM pg_database WHERE datname = 'work_trial') THEN
        -- Create a new database
        CREATE DATABASE work_trial;
    END IF;
END $$;

-- Grant connect privilege
GRANT CONNECT ON DATABASE work_trial TO work_trial_user;

-- Grant all privileges on the database to the new user
GRANT ALL PRIVILEGES ON DATABASE work_trial TO work_trial_user;


CREATE TABLE IF NOT EXISTS users (
    id SMALLINT NOT NULL UNIQUE PRIMARY KEY,
    name VARCHAR(200) NOT NULL,
    company VARCHAR(200) NOT NULL,
    email VARCHAR(255) NOT NULL,
    phone VARCHAR(55) NOT NULL
)