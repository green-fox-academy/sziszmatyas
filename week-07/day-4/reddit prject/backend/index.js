"use strict";

import express from "express";
import mysql from "mysql2";
import { router } from "./routes.js";

const app = express();
const PORT = 3000;
app.use(express.json());
app.use(router);
/*
let conn = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "password",
    database: "reddit"
})

conn.connect((err) => {
    if (err) {
        console.log(err)
    } else {
        console.log("Connection successful!")
    }
})

app.get("/posts", (req, res) => {
    conn.query(`SELECT * FROM reddit;`, (err, rows) => {
        if (err) {
            console.log(err);
            res.send(500);
        } else {
           res.status(200).json(rows);
        }
    })
});


app.get("/posts/:id", (req, res) => {
    let postId = req.params.id;
    conn.query(`SELECT * FROM reddit WHERE id = ?;`, [postId], (err, rows) => {
        if (err) {
            console.log(err);
            res.send(500);
        } else {
           res.status(200).json(rows);
        }
    })
})

app.post("/posts", (req, res) => {
    let postTitle = req.body.title;
    let postURL = req.body.url;
    conn.query(`INSERT INTO reddit(title, url) VALUES (?,?)`, [postTitle, postURL], (err, result) => {
        if (err) {
            console.log(err);
            res.send(500);
        } else {
            //res.status(200).json(result);
            res.status(200).send(`Insert successful, new post added with id ${result.insertId}`);
        }
    })
})

app.put("/posts/:id+plus", (req, res) => {
    let postId = req.params.id;
    conn.query(`UPDATE reddit SET score = score + 1 WHERE id = ?;`, [postId], (err, result) => {
        if (err) {
            console.log(err);
            res.send(500);
        } else {
            res.status(200).send(`Added one to the score of post ${postId}. New score: `);
        }
    })
})

app.put("/posts/:id+minus", (req, res) => {
    let postId = req.params.id;
    conn.query(`UPDATE reddit SET score = score - 1 WHERE id = ?;`, [postId], (err, result) => {
        if (err) {
            console.log(err);
            res.send(500);
        } else {
            res.status(200).send(`Subtracted one from the score of post ${postId}. New score: `);
        }
    })
})

app.delete()
*/
app.listen(PORT, () => console.log(`I am listening on port ${PORT}.`));
