const express = require('express');

const app = express();

app.get('/',(req,res) => {
    res.send('<h1>Hello world!</h1>');
})

app.get('/data', (req,res) => {
    res.json({name:'haha',age:12});
})

app.listen(9090,() =>{
    console.log('Node express is work');
})