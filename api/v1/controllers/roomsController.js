import { StatusCodes } from 'http-status-codes';
import NotFoundError from '../../../errors/not-found.js'
import BadRequestError from '../../../errors/bad-request.js';
import Rooms from '../models/Room.js'
export const createRoom = async (req,res,next)=>{
  try {
    const {user:{userID:senderID},body:{receiverID}} = req;
    const room = await Rooms.create({members:[senderID,receiverID]});
    return res.status(StatusCodes.OK).json({success:true,room});
  } catch (error) {
    next(error);
  }
}
export const getRooms = async (req,res,next)=>{
  try {
    const {user:{userID}} = req;
    const rooms = await Rooms.find({members:{$in:[userID]}});
    return res.status(StatusCodes.OK).json({success:true,rooms});
  } catch (error) {
    next(error);
  }
}
// export const getSinglePostComments = async (req,res,next)=>{
//   try {
//     const {params:{id:postID}} = req;
//     const comments = await Comments.find({postID}).populate({path:'user', select:'username profilePic'});
//     return res.status(StatusCodes.OK).json({success:true,nbHits:comments.length,comments});
//   } catch (error) {
//    next(error);
//   }
// }
