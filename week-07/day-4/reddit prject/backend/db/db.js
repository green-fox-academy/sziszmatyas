import mysql from "mysql2"
import { dbSettings } from "./settings.js"

export const db = mysql.createConnection(dbSettings)

db.connect((err) => {
    if (err) {
        console.log(err)
    } else {
        console.log("Connection successful!")
    }
})