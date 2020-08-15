const express = require('express');
const path= require('path')

const app = express();;

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname,'views','index.html'));
})

app.listen(process.env.PORT,()=>{
        console.log('listening on port'+process.env.PORT)
})

require('./webhook.js')(app);