const express =require("express");
const app= express();
const bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.get("/",(req,res)=>{
    res.send("Welcome to  my love");
    console.log(req.body);
})
app.get("/test",(req,res)=>{
    res.sendFile(__dirname + "/views/index.html");
})
app.post("/post/form",(req,res)=>{
    res.send("it run");
    console.log(req.body.id + "+++++++" + req.body.email + "" +req.body.name +"--- "+req.body.active);
    console.log(req.path);
})


require("../node-express-api/routes/customer.route.js")(app);
app.listen(3000,()=>{
    console.log("Server is running on port 3000");
})