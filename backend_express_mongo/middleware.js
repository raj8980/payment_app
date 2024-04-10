const { JWT_SECRET } = require("./config");
const jsonwebtoken = require("jsonwebtoken");

const authMiddleware = (req, res, next) => {
  const authHeader = req.headers["authorization"];
  const token = authHeader.split(" ");

  try {
    const decodedValue = jsonwebtoken.verify(token[1], JWT_SECRET);

    if (decodedValue.userId) {
      req.userId = decodedValue.userId;
      next();
    }
  } catch (exception) {
    console.log(exception);
    return res.status(403).json({
      message: "User credentials are invalid",
    });
  }
};

module.exports = {
  authMiddleware,
};
