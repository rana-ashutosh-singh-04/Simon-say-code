const express = require("express");
const app = express();

const port = 8080;

const path = require("path");

app.listen(port,()=>{
    // console.log(`listening on port ${port}`)
})

app.set("view engine", "ejs");

app.set("views", path.join(__dirname,"views")
)

app.use(express.static(path.join(__dirname,views)))
// app.get("/",()=>{
//     console.log("requested on home dir")
// })
app.use((req,res)=>{
    // console.log(req)
    // res.send("your request recived");
    console.log("request accepted");
    res.render("home.ejs")
})