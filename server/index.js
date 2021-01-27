const e = require("express");
const express = require("express");
const app = express();
var cors = require("cors");
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const authRoute = require("./routes/auth");
const tweetRoute = require("./routes/tweet");
const accountRoute = require("./routes/twitterAccounts");
const twitterRoute = require("./routes/twitterAccess");

dotenv.config();

mongoose.connect(
  process.env.DB_CONNECT,
  { useNewUrlParser: true, useUnifiedTopology: true },
  () => {
    console.log("connected to db!");
  }
);

app.use(cors());

app.use(express.json());

app.use("/api/user", authRoute);
app.use("/api/tweet", tweetRoute);
app.use("/api/account", accountRoute);
app.use("/api/twitter", twitterRoute);

let port = 8080;

app.listen(port, () => console.log(`server up and running at ${port}`));
