//imports
import express from "express";
import cors from "cors";
import helmet from "helmet";
import dotenv from 'dotenv';
import notFound from './middlewares/notFound.js';
import connectDB from "./db/connect.js";
import errorHandlerMiddleware from './middlewares/error-handler.js';
import usersRoutes from './api/v1/routes/userRoutes.js';
import postRoutes from './api/v1/routes/postRoutes.js';
import messageRoutes from './api/v1/routes/messageRoutes.js';
import commentRoutes from './api/v1/routes/commentsRoute.js';
import roomRoutes from './api/v1/routes/roomsRoute.js';
import {Server} from 'socket.io'
import {createServer} from 'http'

//app config
dotenv.config();
const app = express();

//extra security packages
app.use(cors());
app.use(helmet());

const server = createServer(app);
//middlewares
app.use(express.json({limit:10000000000}));
// app.use(express);

//api  routes 
app.get("/api/v1/instagram-clone",(req,res)=>{
    res.status(200).json({success:true,message:"my instagram-clone app!!!"});
});
app.use('/api/v1/instagram-clone/users',usersRoutes);
app.use('/api/v1/instagram-clone/posts',postRoutes);
app.use('/api/v1/instagram-clone/messeger',messageRoutes);
app.use('/api/v1/instagram-clone/comments',commentRoutes);
app.use('/api/v1/instagram-clone/rooms',roomRoutes);

//not found route
app.use(notFound);

//error handlermindleware
app.use(errorHandlerMiddleware);
const port = process.env.PORT || 5000;
const start = async ()=>{
    await connectDB(process.env.MONGO_URL);
    app.listen(port,()=> console.log(`server listening at port ${port}...`));
}

 start();

//socket server
const io = new Server(server,{cors:{origin:'*' ,methods:['GET','POST'] }});

io.on('connection',socket =>{
    console.log('a user connected',socket.id);
})
io.on('disconnect', socket => console.log('a user disconnected',socket.id));

