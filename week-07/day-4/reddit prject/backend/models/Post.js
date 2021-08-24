import { db } from "../db/db.js"
import { createErrorResponse } from "../services/errorService.js";

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
                resultHandler(err)
            } else {
                let newId = results.insertId;
                //resultHandler(results);
                const query = "SELECT * FROM reddit WHERE id = ?;"
                //let postId = req.params.id;
                db.query(query, [newId], (err, results) => {
                    if (err) {
                        console.log(err);
                    } else {
                        //let newId = results.insertId;
                        resultHandler(results);
                    }
                })
            }
        })
    },
    putPlus: (id, resultHandler) => {
        const query = "UPDATE reddit SET score = score + 1 WHERE id = ?;";
        db.query(query, [id], (err, results) => {
            if (err) {
                console.log(err);
                resultHandler(createErrorResponse(err))
            } else {
                if (results.affectedRows === 0) {
                    resultHandler(createErrorResponse("no item with such id"))
                }
                resultHandler(results)
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