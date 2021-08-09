import { db } from "../db/db.js"

export const Post = {
    getAll: (resultHandler) => {
        const query = "SELECT * FROM reddit;";
        db.query(query, (err, results) => {
            if (err) {
                console.log(err);
                res.send(500);
            } else {
                resultHandler(results);
            }
        })
    },
    getById: (id, resultHandler) => {
        const query = "SELECT * FROM reddit WHERE id = ?;"
        //let postId = req.params.id;
        db.query(query, [id], (err, results) => {
            if (err) {
                console.log(err);
                res.send(500);
            } else {
                resultHandler(results[0]);
            }
        })
    },

    post: (newPost, resultHandler) => {
        const query = "INSERT INTO reddit SET ?;"
        //let postId = req.params.id;
        db.query(query, newPost, (err, results) => {
            if (err) {
                console.log(err);
                res.send(500);
            } else {
                resultHandler(results);
            }
        })
    },
    putPlus: (id, resultHandler) => {
        const query = "UPDATE reddit SET score = score + 1 WHERE id = ?;";
        db.query(query, [id], (err, results) => {
            if (err) {
                console.log(err);
                res.send(500);
            } else {
                resultHandler(results);
            }
        })
    },
    putMinus: (id, resultHandler) => {
        const query = "UPDATE reddit SET score = score - 1 WHERE id = ?;";
        db.query(query, [id], (err, results) => {
            if (err) {
                console.log(err);
                res.send(500);
            } else {
                resultHandler(results);
            }
        })
    },
    delete: (id, resultHandler) => {
        const query = "DELETE FROM reddit WHERE id = ?;";
        db.query(query, [id], (err, results) => {
            if (err) {
                console.log(err);
                res.send(500);
            } else {
                resultHandler(/*results*/);
            }
        })
    },
}