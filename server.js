const express = require("express")
const mongoose = require("mongoose");
const app = express()
const http = require("http").Server(app);
const chalk = require("chalk");
const port = 3000;
const hostIP = "127.0.0.1"
const bodyParser = require("body-parser");
const addMobile = require("./functions/addMobile")
const getMobiles = require("./functions/getMobiles")
app.use(express.static(__dirname + "/"))
app.get("/", (req, res)=>{
    res.render("index.html")
})
app.use(bodyParser.json({ limit: "50mb" }));
app.use(
  bodyParser.urlencoded({
    limit: "50mb",
    extended: true,
    parameterLimit: 50000,
  })
);
app.post("/mobile", addMobile)
app.get("/mobile", getMobiles)
app.listen(port,()=>{
console.log("App listening to: "+port)
})
mongoose
  .connect("mongodb+srv://admin:admin@sit725.a4zcahj.mongodb.net/", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() =>
    console.log(`${chalk.green("✓")} ${chalk.blue("MongoDB Connected!")}`)
  )
  .then(() => {
    http.listen(port, hostIP, () => {
      console.log(
        `${chalk.green("✓")} ${chalk.blue(
          "Server Started on port"
        )} http://${chalk.bgMagenta.white(hostIP)}:${chalk.bgMagenta.white(
          port
        )}`
      );
    });
  })
  .catch((err) => console.log(err));
