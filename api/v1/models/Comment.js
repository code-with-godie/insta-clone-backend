import mongoose from "mongoose";

const commentSchema = new mongoose.Schema({
    comment:{
        type:String,
        required:[true,'please provide a comment']
    },
    postID:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'posts',
        required:[true,'please provide the post id']

    },
    user:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'users',
        required:[true,'please provide the user id']

    }
},{timestamps:true});
export default mongoose.model("comments",commentSchema);