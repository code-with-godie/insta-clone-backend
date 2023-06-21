import  express  from "express";
import {blockUser, deleteUser,  follow,  getAllUsers,getSingleUser,login, register,updateUser} from '../controllers/usersController.js';
import authorize from '../../../middlewares/authentication.js';

const Router = express.Router();
Router.route('/').get(authorize,getAllUsers);
Router.route('/auth/login').post(login);
Router.route('/auth/register').post(register);
Router.route('/block/:id').patch(authorize,blockUser);
Router.route('/follow/:id').patch(authorize,follow);
Router.route('/:id').patch(authorize,updateUser).delete(authorize,deleteUser).get(getSingleUser);
export default Router