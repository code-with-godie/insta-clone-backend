import mongoose from "mongoose";

const messageSchema = new mongoose.Schema({
    title:{
        type:String,
        required:[true,'please provide a message title']
    },
    roomID:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'rooms',
        required:[true,'please provide the room id']

    },
     senderID:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'users',
        required:[true,'please provide the message sender']
    },
},{timestamps:true});
export default mongoose.model("messages",messageSchema);