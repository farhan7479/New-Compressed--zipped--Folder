const express = require("express");

const app = express();
const port = 8000;


//for serving static files
app.use('/static', express.static('static'))
app.get("/", (req, res)=>{
    res.send("This is homepage of my first express app with harry")
});
app.get("/about", (req, res)=>{
    res.send("This is about page of my first express app with harry")
});
app.post("/about", (req, res)=>{
    res.send("This is post request about page of my first express app with harry")
});
app.get("/this", (req, res)=>{
    res.status(404).send("This page is not found on my website cwh");
});

app.listen(port,()=>{
    console.log(`The application started successfully on port ${port}`)
})