import jwt from "jsonwebtoken"

const authMiddleware = (req,res,next)=>{
    try{
        // get token from header
        const authHeader = req.headers.authorization;
        console.log("authHeader : ",authHeader)

        if(!authHeader){
            return res.status(401).json({ msg: "No token provided" });
        }

        // extract token (Bearer token)
        const token = authHeader.split(" ")[1]
        console.log("token :",token)

        // verify token
        const decoded = jwt.verify(token , process.env.JWT_SECRET)
        console.log("decoded :",decoded)
        req.user = decoded;

        // Continue to next
        next()

    }catch(error){
        return res.status(401).json({
            msg: "Invalid or expired token"
        })
    }
}

export default authMiddleware;