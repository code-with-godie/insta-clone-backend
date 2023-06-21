import express from 'express';
import { createPost, getAllPosts, getReels, getSingleUserAllPosts, toggleLikes, togglebookmarks } from '../controllers/postsController.js';
import authorize from '../../../middlewares/authentication.js';
import uploadFile from '../../../middlewares/uploadToCloudinary.js';

const Router = express.Router();

Router.route("/").post(authorize,uploadFile,createPost);
Router.route("/").get(authorize,getAllPosts);
Router.route("/reels").get(authorize,getReels);
Router.route("/like/:id").patch(authorize,toggleLikes);
Router.route("/bookmark/:id").patch(authorize,togglebookmarks);
Router.route("/:id").get(authorize,getSingleUserAllPosts);

export default Router