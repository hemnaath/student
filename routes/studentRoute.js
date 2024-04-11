const express = require('express');
const studentController = require('../controller/studentController');

const route = express.Router();

route.post('/create', studentController.createStu);
route.put('/update/:id', studentController.updateStu);
route.delete('/delete/:id', studentController.deleteStu);
route.get('/get', studentController.getStu);


module.exports = route;