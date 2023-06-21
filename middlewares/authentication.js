import jwt from 'jsonwebtoken';
import NotFoundError from '../errors/not-found.js';
import UnauthenticatedError from '../errors/unauthenticated.js'
import Users from '../api/v1/models/User.js';
const authorize = async (req, res, next) => {
   try {
  // check header
  const authHeader = req.headers.authorization;
  if (!authHeader || !authHeader.startsWith('Bearer')) {
    throw new UnauthenticatedError("UNAUTHENTICATED!");
  }
  const token = authHeader.split(' ')[1];
    const payload = jwt.verify(token, process.env.JWT_SECRET);
    const user = await Users.findById(payload.userID);
    if(!user){
     throw  new NotFoundError('AUTHENTIFICATION FAILED. TYRY LOGGING IN AGAIN!')
    }
    // attach the user to the job routes
    req.user = {...payload };
    next();
  } catch (error) {
    next(error);
  }
};

export default authorize
