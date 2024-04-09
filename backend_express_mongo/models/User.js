const zod = require("zod");

const user = zod.object({
    userName : zod.string().email().min(3).max(30),
    firstName : zod.string().length(50),
    lastName : zod.string().length(50),
    password : zod.string().min(6)
});

const userSignIn = zod.object({
    userName : zod.string().email().min(3).max(30),
    password : zod.string().min(6)
});

const userUpdate = zod.object({
     password : zod.string().min(6).optional(),
     firstName : zod.string().length(50).optional(),
     lastName : zod.string().length(50).optional
});

const filterParam = zod.string().length(50);

module.exports={
    user,
    userSignIn,
    userUpdate,
    filterParam
}; 