import express from 'express';
import authorize from '../../../middlewares/authentication.js';
import { createRoom, getRooms } from '../controllers/roomsController.js'
const Router = express.Router();
Router.route('/').post(authorize,createRoom).get(authorize,getRooms);



export default Router