const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const userRoute = require("./routes/user.route");

const app = express();

const PORT = 40375;

app.use(cors());
app.use(express.json());
app.use("", userRoute);

async function startServer() {
  try {
    await mongoose.connect(
      "mongodb+srv://admin:admin@cluster0.95n1r.mongodb.net/myFirstDatabase?retryWrites=true&w=majority",
      { useUnifiedTopology: true, useNewUrlParser: true }
    );
    app.listen(PORT, () => {
      console.log(`Server started on ${PORT} port`);
    });
  } catch (error) {
    console.log(error);
  }
}
startServer();
