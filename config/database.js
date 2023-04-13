const mongoose = require("mongoose");

exports.connectDatabase = () => {
  mongoose
    .connect(process.env.MONGO_URI)
    .then((c) => {
      console.log(`Mongodb connect to: ${c.connection.host}`.yellow.bold);
    })
    .catch((e) => {
      console.log("MongoDB Cunnection error -> ");
      console.log(e);
    });
};
