import { Post } from "../models/Post.js"

export const postsService = {
    getAllPosts: (resultHandler) => {
        return Post.getAll(resultHandler)
    },
    getPostById: (id, resultHandler) => {
        return Post.getById(id, resultHandler)
    },
    postPost: (postParams, resultHandler) => {
        return Post.post(postParams, resultHandler)
    },
    putPlusScoreById: (id) => {},
    putMinusScoreById: (id) => {},
    deletePostById: (id) => {},

}