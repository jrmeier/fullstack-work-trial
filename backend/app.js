import express from 'express'
import { getDb } from './db';

const app = express();
const PORT = 3001;

// Middleware to parse JSON requests
app.use(express.json());

// inject the database
app.use((req, res, next) => {
    req.db = getDb;
    next();
});

// Basic route
app.get('/users', async (req, res) => {
    try{
    const db = req.db()
    await db.connect()

    const usersQuery = await db.query('SELECT * FROM users;')
    // console.log({ usersQuery})
    await db.end()

    const {rows} = usersQuery

    res.status(200).send(rows)
    }
    catch(e) {
        console.error(e)
        res.status(500).send({error: "Unknown Error"})
    }

});

app.post('/users', async (req, res) => {
    let msg = {}
    let statusCode = 200
    try {
    const db = req.db()
    await db.connect()

    const user = req.body

    const values = [user.id, user.name, user.company, user.email, user.phone]
        try {
            await db.query(`
            INSERT INTO users (id, name, company, email, phone)
            VALUES ($1, $2, $3, $4, $5)
            `, values)
            msg = {user}
        } catch(e) {

            if (e.code === '23505'){
                msg = {error: "Duplicate ID"}
                statusCode = 400

            } else {
                statusCode = 500
                console.error(e)
                msg = {error: "Unknown Error"}

            }
    
        await db.end()
        }
    }
    catch(e) {
        console.error(e)
        msg = {error: "Unknown Error"}
        statusCode = 500
    }

    res.status(statusCode).send(msg)

})


// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});