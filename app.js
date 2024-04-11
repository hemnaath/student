require('./config/mongoController');
const express = require('express');
const studentRouting = require('./routes/studentRoute');

const app = express();

app.use(express.json());

app.use('/student', studentRouting);

app.listen(1731, ()=>{
    console.log('Server Connected');
})