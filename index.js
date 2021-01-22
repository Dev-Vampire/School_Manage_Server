const express = require("express");
const mongoose = require("mongoose");

const app = express();

const Port = process.env.port || 3000;


mongoose.connect('mongodb://localhost:27017/schooldb', {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true
});
const connection = mongoose.connection;

connection.once("open", () => console.log("MongoDb connected!"));


app.use('/uploads', express.static('uploads'));
app.use(express.json());
const userRoute = require("./routes/user");
app.use("/user", userRoute);

data = {
    msg: "Welcome To OQ Store",
    info: "This is an application",
    Working: "To search easily many old queations :)",
    request:
      "Enjoy in this application",
  };
  

app.route("/").get((req, res) => res.json(data))

app.listen(Port, "0.0.0.0", () => console.log(`Server running on Port ${Port}`));