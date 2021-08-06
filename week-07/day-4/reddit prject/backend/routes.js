import express from "express";
import { postsController } from "./controllers/postsController.js";

export const router = express.Router();

router.get("/posts", postsController.getAllPosts);
router.get("/posts/:id", postsController.getPostById);
router.post("/posts", postsController.postPost);
router.put("/posts/:id+plus", postsController.putPlusScoreById);
router.put("/posts/:id+minus", postsController.putMinusScoreById);
router.delete("/posts/:id", postsController.deletePostById);