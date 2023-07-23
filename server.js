const express = require("express")
const app = express()
const port = 3000;
app.use(express.static(__dirname + "/"))
app.get("/wordCounter", (req, res)=>{
    const s1 = req.query.s1
    let string = s1.replace(/\s+/g, " ").trim();
    let wordCount = string.split(' ').length;
    res.json({
        message:"success",
        result : wordCount
    })
})
app.listen(port,()=>{
console.log("App listening to: "+port)
})
