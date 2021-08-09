import { postsService } from "../services/postsService.js"
import { createErrorResponse } from "../services/errorService.js"
import { Post } from "../models/Post.js"


export const postsController = {
    getAllPosts: (req, res) => {
        const resultHandler = (dbResults) => {
            res.status(200).json({ posts: dbResults })
        }
        postsService.getAllPosts(resultHandler)
    },

    getPostById: (req, res) => {
        const resultHandler = (dbResults) => {
            if (dbResults) {
                res.status(200).json(dbResults)
            } else {
                res.status(404).send(createErrorResponse("No post with such id."))
            }
        }
        postsService.getPostById(req.params.id, resultHandler)
    },

    postPost: (req, res) => {
        const resultHandler = (dbResults) => {
            res.status(200).json(dbResults)
        }
        postsService.postPost(req.body, resultHandler)
    },

    putPlusScoreById: (req, res) => {
        const resultHandler = (dbResults) => {
            if (dbResults) {
                res.status(200). json(dbResults)
            } else {
                res.status(404).send(createErrorResponse("No post with such id."))
            }
        }
        postsService.putPlusScoreById(req.params.id, resultHandler)
    },

    putMinusScoreById: (req, res) => {
        const resultHandler = (dbResults) => {
            if (dbResults) {
                res.status(200).json(dbResults)
            } else {
                res.status(404).send(createErrorResponse("No post with such id."))
            }
        }
        postsService.putMinusScoreById(req.params.id, resultHandler)
    },

    deletePostById: (req, res) => {
        const resultHandler = (dbResults) => {
            if (dbResults) {
                res.status(200).json(dbResults)
            } else {
                res.status(404).send(createErrorResponse("No post with such id."))
            }
        }
        postsService.deletePostById(req.params.id, resultHandler)
    },
}

