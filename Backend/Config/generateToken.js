const jwt = require("jsonwebtoken");

const generateToken = (id) => {
  console.log(id, process.env.PRIVATE_KEY, "GT");
  return jwt.sign({ id }, process.env.PRIVATE_KEY, { expiresIn: "30d" });
};

module.exports = generateToken;
