CREATE TABLE IF NOT EXISTS users (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL UNIQUE,
    password VARCHAR(255)
);

CREATE TABLE IF NOT EXISTS forms (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    description TEXT,
    email VARCHAR(255) REFERENCES users(email),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    fields JSON
);

CREATE TABLE IF NOT EXISTS form_fields (
    id SERIAL PRIMARY KEY,
    form_id INT REFERENCES forms(id),
    label VARCHAR(255) NOT NULL,
    type VARCHAR(50) NOT NULL,
    required BOOLEAN DEFAULT FALSE,
    -- options JSON,
    order_index INT
);


CREATE TABLE IF NOT EXISTS form_submissions (
    id SERIAL PRIMARY KEY,
    form_id INT REFERENCES forms(id),
    email VARCHAR(255) REFERENCES users(email),
    submitted_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    data JSON
);


CREATE TABLE IF NOT EXISTS form_submission_fields (
    id SERIAL PRIMARY KEY,
    submission_id INT REFERENCES form_submissions(id),
    field_id INT REFERENCES form_fields(id),
    value TEXT
);