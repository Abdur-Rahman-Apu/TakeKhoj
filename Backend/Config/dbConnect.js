const mongoose = require("mongoose");

const DbConnection = async () => {
  try {
    console.log(process.env.MONGO_URI);
    const conn = await mongoose.connect(process.env.MONGO_URI);
    console.log(`Mongodb connection = ${conn.connection.host}`);
  } catch (error) {
    console.log(`Error = ${error.message}`);
    process.exit();
  }
};

module.exports = DbConnection;
