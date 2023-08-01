const express = require("express")
const app = express()
const port = 3000;
app.use(express.static(__dirname + "/"))
app.set('view engine', 'ejs');
const cardList = [
    {
        title: "IOS",
        image: "../images/iphone.jpg",
        link: "Iphone 13 blue color",
        desciption: "Iphone 13 blue color"
      },
    {
      title: "Android",
      image: "../images/Samsung.jpeg",
      link: "Samsung S20 Sky blue color",
      desciption: "Samsung S20 Sky blue color"
    },
    {
      title: "Windows",
      image: "../images/Windows.jpeg",
      link: "Nokia Lumia 520 Blue color",
      desciption: "Nokia Lumia 520 Blue color"
    }
  ];
app.get("/", (req, res)=>{
    res.render("index.ejs", {cardList})
})
app.listen(port,()=>{
console.log("App listening to: "+port)
})
