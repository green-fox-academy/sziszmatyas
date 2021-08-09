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
    putPlusScoreById: (id, resultHandler) => {
        return Post.putPlus(id, resultHandler)
    },
    putMinusScoreById: (id, resultHandler) => {
        return Post.putMinus(id, resultHandler)
    },
    deletePostById: (id, resultHandler) => {
        return Post.delete(id, resultHandler)
    },

}