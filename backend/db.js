import { Client } from 'pg'
// CREATE ROLE newusername WITH LOGIN PASSWORD 'yourpassword';
// -- Grant the CONNECT privilege to the database
// GRANT CONNECT ON DATABASE textface_prod TO newusername;

// -- Grant USAGE on the schema (assuming public schema, adjust if different)
// GRANT USAGE ON SCHEMA public TO newusername;

// -- Grant CRUD (SELECT, INSERT, UPDATE, DELETE) permissions on all tables in the schema
// GRANT SELECT, INSERT, UPDATE, DELETE ON ALL TABLES IN SCHEMA public TO newusername;

// -- Similarly, if there are sequences (for serial/auto-incrementing columns), grant usage on them
// GRANT USAGE, SELECT, UPDATE ON ALL SEQUENCES IN SCHEMA public TO newusername;


export const getDb = () => {
    try {
        const client = new Client({
            user: 'fullstack_work_trial_user',
            password: 'SomeB1GlongpworD',
            database: 'fullstack_work_trial',
            port: 5432,
            host: 'postgres'
        })

        return client
    }
    catch(err) {
        console.error(err)
        process.exit(1)
    }
}
