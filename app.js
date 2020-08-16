const express = require('express');
const path= require('path')

const app = express();;

app.use(express.urlencoded({extended: true}));

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname,'views','index.html'));
})

app.post("/webhook", (req, res) => {
    console.log("activate webhook");
    console.log(req.body);
    res.status(200).send();
});

app.listen(process.env.PORT,()=>{
        console.log('listening on port'+process.env.PORT)
})

