const express = require("express");
const config = require("config");
const chalk = require("chalk");
const fileUpload = require("express-fileupload");
const mongoose = require("mongoose");
const routes = require("./routes");
const cors = require("cors");
const path = require("path");
const app = express();

app.use(cors());
app.use(express.json());
app.use(fileUpload({}));
app.use(express.urlencoded({ extended: false }));
app.use("/api", routes);
app.use(express.static(path.resolve(__dirname, "static")));

if (process.env.NODE_ENV === "production") {
  app.use("/", express.static(path.join(__dirname, "client")));

  const indexPath = path.join(__dirname, "client", "index.html");

  app.get("*", (req, res) => {
    res.sendFile(indexPath);
  });
}


const PORT = config.get("port") ?? 8080;

async function start() {
  try {
    await mongoose.connect(config.get("mongoUri"));
    app.listen(PORT, () =>
      console.log(chalk.green(`Server has been started on port ${PORT}...`))
    );
  } catch (error) {
    console.log(chalk.red(error.message));
  }
}

start();
