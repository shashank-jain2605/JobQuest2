import User from "../models/User.js";

const register = async (req, res, next) => {
  const user = await User.create(req.body);
  const token = user.createJWT();
  res.status(201).json({ user, token });
};

const login = async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    throw new Error("please provide all values");
  }

  const user = await User.findOne({ email }).select("+password");

  if (!user) {
    throw new Error("Invalid credentials");
  }

  const isPasswordCorrect = await user.comparePassword(password);
  if (!isPasswordCorrect) {
    throw new Error("Invalid credentials");
  }

  const token = user.createJWT();

  res.status(200).json({ user, token, location: user.location });
};

const updateUser = async (req, res) => {
  const { email, name, lastName, location } = req.body;

  if (!email || !name) {
    throw new Error("email / password not provided");
  }

  const user = await User.findOne({ _id: req.user.userId });

  user.email = email,
  (user.name = name),
  (user.lastName = lastName),
  (user.location = location),

//comments
  await user.save();
  const token = user.createJWT();

  res.status(200).json({ user, token, location: user.location });
  console.log(req.user);
  res.send("update user");
};

export { register, login, updateUser };
