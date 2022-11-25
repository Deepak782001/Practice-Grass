const express = require('express')
const app = express()

const connectToDB = require("./Database.js");
const Usermodel = require("./model.js");

connectToDB();

app.get('/', (req, res) => {
    res.send('Connected');
});


app.post('/head',(req, res) => {
    req.send({names,phone,code})
});


app.listen(3000, console.log('server is listening on port 3000'));