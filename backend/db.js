require('dotenv').config({path: '../.env'});

import { Client } from 'pg'

const { DB_USER, DB_PASSWORD, DB_HOST, DB_PORT, DB_NAME } = process.env

export const getDb = () => {
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
