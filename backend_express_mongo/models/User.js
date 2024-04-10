const zod = require("zod");

const user = zod.object({
  userName: zod.string().email().min(3).max(30),
  firstName: zod.string().min(3).max(50),
  lastName: zod.string().min(3).max(50),
  password: zod.string().min(6),
});

const userSignIn = zod.object({
  userName: zod.string().email().min(3).max(30),
  password: zod.string().min(6),
});

const userUpdate = zod.object({
  password: zod.string().min(6).optional(),
  firstName: zod.string().max(50).optional(),
  lastName: zod.string().max(50).optional(),
});

const filterParam = zod.string().max(50);

module.exports = {
  user,
  userSignIn,
  userUpdate,
  filterParam,
};
