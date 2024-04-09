import { JWT_SECRET } from "./config";

const jsonwebtoken = require("jsonwebtoken");

export function authMiddleware(req,res,next){
    const authHeader = req.headers['authorization'];
    const token =authHeader.split(" ");

    try{
        const decodedValue = jsonwebtoken.verify(token,JWT_SECRET);
        
        if(decodedValue.userId){
            req.userId = decodedValue.userId
            next();
        }
    }catch(exception){
        console.log(exception);
        return res.status(403).json({
            message : "User credentials are invalid"
        });
    }
}