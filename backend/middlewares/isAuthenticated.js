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
        const decoded=await jwt.verify(token,process.env.SECRET_KEY);
        if(!decoded){
            return res.status(401).json({
                message:"Invalid token",
                success:false
            });

        }
        req.id=decoded.userID;
        next();
    } catch (error) {
        return res.status(500).json({
            message:"Internal server error",
            success:false   
        })
    }
}

export default isAuthenticated;