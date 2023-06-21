import {v2 as cloudinary} from 'cloudinary'
const handleUpload = async (req,res,next) =>{
    cloudinary.config({
        cloud_name:process.env.CLOUDINARY_CLOUD_NAME,
        api_key:process.env.CLOUDINARY_API_KEY,
        api_secret:process.env.CLOUDINARY_API_SECRET
    })
    try {
        const {body:{posts,folder}} = req;
        if(posts.length === 1){
            const response = await uploadFile(posts[0],folder);
            const {resource_type,secure_url} = response;
            req.file = {resource_type,secure_url}
            next();
        }else{
            return res.send(posts)
        }
    } catch (error) {
        next(error);
    }

}

export const uploadFile = async (file,folder)=>{
    const response = await cloudinary.uploader.upload(file?.url,{resource_type:'auto',folder})
    return response;
}
export const deleteFile = async (file,folder)=>{
    const response = await cloudinary.uploader.upload(file?.url,{resource_type:'auto',folder})
    return response;
}

export default handleUpload