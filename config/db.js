const { cyan } = require("colors");
const mongoose = require("mongoose");

const connectBD = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI);

    console.log(`MongoDB Connected: ${conn.connection.host}`.cyan.underline)
  } catch (error){
    console.log(error);
    process.exit(1);
  }
}

module.exports = connectBD