import express from 'express';
import authorize from '../../../middlewares/authentication.js';
import { createComment, getSinglePostComments } from '../controllers/commentsContoller.js';

const Router = express.Router();

Router.route("/:id")
.post(authorize,createComment)
.get(authorize,getSinglePostComments);

export default Router