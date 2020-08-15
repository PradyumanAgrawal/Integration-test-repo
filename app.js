const express = require('express');
const path= require('path')

const app = express();;

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname,'views','index.html'));
})
PORT=process.env.PORT||3000;
app.listen(PORT,()=>{
        console.log('listening on port'+PORT)
})

require('./webhook.js')(app);