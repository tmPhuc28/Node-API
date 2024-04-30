require("dotenv").config();
var cors = require("cors");
const express = require("express");
const mongoose = require("mongoose");
const productRoute = require("./routes/productRoute");
const { errorMiddleware } = require("./middleware/errorMiddleware");
const app = express();
const PORT = process.env.PORT || 3000;
const DATABASE_URL = process.env.DB_URL;
const URL_FE = process.env.URL_FRONTEND;
var corsOptions = {
  origin: URL_FE,
  optionsSuccessStatus: 200, // some legacy browsers (IE11, various SmartTVs) choke on 204
};

app.use(cors(corsOptions));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use("/api/products", productRoute);
app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.use(errorMiddleware);
mongoose
  .connect(DATABASE_URL)
  .then(() => {
    console.log("connected to MonggoDB");

    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  })
  .catch((err) => {
    console.log("error connecting to MonggoDB");
  });
