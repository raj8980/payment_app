const zod = require("zod");

const user = zod.object({
    userName : zod.string().email().array().min(3).max(30),
    firstName : zod.string().array().nonempty().length(50),
    lastName : zod.string().array().nonempty().length(50),
    password : zod.string().array().nonempty().min(6)
});

const userSignIn = zod.object({
    userName : zod.string().email().array().min(3).max(30),
    password : zod.string().array().nonempty().min(6)
});

module.exports={
    user,
    userSignIn
};
