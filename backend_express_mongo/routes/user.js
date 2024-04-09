const express = require("express");

const router = express.Router();
const jsonwebtoken = require("jsonwebtoken");

const { user,userSignIn } = require("../models/User");
const { User } = require("../db");
const { JWT_SECRET } = require("../config");

router.post("/signup", async (req, res) => {
  const userSignUpPayload = req.body;
  const parsedPayload = user.safeParse(userSignUpPayload);

  if (!parsedPayload.success) {
    return res.status(411).json({
      message: "Input are invalid : " + parsedPayload.error.message,
    });
  } else {
    const userExist = await User.findOne({
      userName: userSignUpPayload.userName,
    });
    if (userExist) {
      return res.status(411).json({
        message: "Username already taken",
      });
    } else {
      const user = await User.create({
        firstName: userSignUpPayload.firstName,
        lastName: userSignUpPayload.lastName,
        userName: userSignUpPayload.userName,
        password: userSignUpPayload.password,
      });

      const userId = user._id;
      const userJWT = jsonwebtoken.sign({ userId : userId }, JWT_SECRET);

      return res.status(200).json({
        message: "User created successfully",
        token: userJWT,
      });
    }
  }
});


router.post("/signin", async (req,res) =>{
    const userSignInPayload = req.body;
    const { success } = userSignIn.safeParse(userSignInPayload);

    if(!success){
        return res.status(411).json({
            message : "Invalid user login payload"
        })
    }

    const user = await User.findOne({userName: userSignInPayload.userName, password:userSignInPayload.password});
    if(!user){
        return res.status(411).json({
            message : "Invalid user email id or password"
        })     
    }else {
        const userId = user._id;
        const userJWT = jsonwebtoken.sign({userId : userId},JWT_SECRET);

        return res.status(200).json({
            token : userJWT 
        });
    }
});

module.exports = router;
