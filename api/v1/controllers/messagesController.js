import Messages from "../models/Message.js";
import { StatusCodes } from "http-status-codes";
import NotFoundError from '../../../errors/not-found.js';
import Users from '../models/User.js';
import BadRequestError from '../../../errors/bad-request.js';

export const sendMessage = async (req,res,next)=>{
    try {
    const {user:{userID}} = req;
    const message = Messages.create({...req.body,user:userID});
    return res.status(StatusCodes.OK).json({success:true,message})
    } catch (error) {
        next(error);  
    }
}