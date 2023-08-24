
export const CREATE_USERS_TABLE_SQL = `
CREATE TABLE IF NOT EXISTS users (
    id SMALLINT NOT NULL UNIQUE PRIMARY KEY,
    name VARCHAR(200) NOT NULL,
    company VARCHAR(200) NOT NULL,
    email VARCHAR(255) NOT NULL,
    phone VARCHAR(55) NOT NULL
)
`

export const INSERT_USER_SQL = `
INSERT INTO users (id, name, company, email, phone)
VALUES ($1, $2, $3, $4, $5)
`