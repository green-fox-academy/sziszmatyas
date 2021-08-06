import dotenv from "dotenv";
dotenv.config();

export const dbSettings = {
    host: "localhost",
    user: process.env.BADGER_DB_USER,
    password: process.env.BAGDER_DB_PASSWORD,
    database: "reddit"
}
