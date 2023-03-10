import jwt from "jsonwebtoken";

const auth = async (req, res, next) => {
  const authHeader = req.headers.authorization;

  console.log(authHeader);

  const token = authHeader.split(" ")[1];
  console.log("token", token);

  try {
    const payload = jwt.verify(token, process.env.JWT_SECRET);
    console.log("payload", payload);
    req.user = { userId: payload.userId };

    next();
  } catch (error) {
    throw new Error(error);
  }
};

export default auth;
