import express from 'express';
import authorize from '../../../middlewares/authentication.js';
import { createRoom } from '../controllers/roomsController.js'
const Router = express.Router();
Router.route('/').post(authorize,createRoom);



export default Router