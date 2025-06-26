import jwt from "jsonwebtoken";

const isAuthenticated=async(req,res,next)=>{
    try {
        const token=req.cookies.token;
        if(!token){
            return res.status(401).json({
                message:"You are not authenticated",
                success:false
            })
        }
        const decoded=await jwt.verfiy(token,process.env.SECRET_KEY);
        if(!decoded){
            return res.status(401).json({
                message:"Invalid token",
                success:false
            });

        }
        req.id=decoded.userID;
        next();
    } catch (error) {
        
    }
}

export default isAuthenticated;