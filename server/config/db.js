const mongoose = require("mongoose");
require("dotenv").config({ path: "./.env" });

const dbConn = async () => {
  try {
    await mongoose.connect(process.env.DB_URL, {
      autoIndex: true,
    });
    console.log("Db connected..........");
  } catch (error) {
    console.log("Db connection Error");
    console.log(error);
  }
};

module.exports = dbConn;
