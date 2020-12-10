const mongoose = require("mongoose");
const db = mongoose.connection;

mongoose.connect('mongodb://localhost/breads', {
	useNewUrlParser: true,
	useUnifiedTopology: true,
	useCreateindex: true
});

db.on("connected", () => {
  console.log(
    `Mongoose connected to MongoDB ${db.name} on ${db.host}:${db.port}.`
  );
});

module.exports = mongoose;