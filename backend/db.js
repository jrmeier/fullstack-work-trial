require('dotenv').config({path: '../.env'});

import { Client } from 'pg'


export const getDb = () => {
    const DB_USER = process?.env?.DB_USER
    const DB_PASSWORD = process?.env?.DB_PASSWORD
    const DB_HOST = process?.env?.DB_HOST
    const DB_PORT = process?.env?.DB_PORT
    const DB_NAME = process?.env?.DB_NAME
    
    try {
        const client = new Client({
            user: DB_USER,
            password: DB_PASSWORD,
            database: DB_NAME,
            port: parseInt(DB_PORT),
            host: DB_HOST
        })

        return client
    }
    catch(err) {
        console.error(err)
        process.exit(1)
    }
}
