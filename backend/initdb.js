import { getDb } from "./db"

const CREATE_USERS_TABLE_SQL = `
CREATE TABLE IF NOT EXISTS users (
    id SMALLINT NOT NULL UNIQUE PRIMARY KEY,
    name VARCHAR(200) NOT NULL,
    company VARCHAR(200) NOT NULL,
    email VARCHAR(255) NOT NULL,
    phone VARCHAR(55) NOT NULL
)`


const startup = async () => {
    console.log("checking for database tables")

    const db = await getDb()
    db.connect()

    // db = 
    try {
        // create the users table
        await db.query(CREATE_USERS_TABLE_SQL)

    } catch(e) {
        console.log("error af: ",e)
        process.exit(1)
    }

}


startup()
.then((x) => console.log('done'))
.catch((e) =>console.log("error: ",e))
.finally(()=>process.exit(1))