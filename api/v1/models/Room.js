import mongoose from "mongoose";

const roomSchema = new mongoose.Schema({
    members:{type:[{type:mongoose.Schema.Types.ObjectId,ref:"users"}]}
},{timestamps:true});
export default mongoose.model("rooms",roomSchema);