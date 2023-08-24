import { getDb } from "./db"
import { CREATE_USERS_TABLE_SQL } from './sql_statements'

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