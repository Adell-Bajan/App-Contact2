const mongoose = require('mongoose');
const employee = require('./employee.model');

mongoose.connect('mongodb://localhost/EmployeeDB');
let db = mongoose.connection;


// Check conection
db.once('open', function() {
    console.log('Mongodb Conecting Succeeded.');
})


// Check for DB errors
db.on('error', function(err) {
    console.log(err);
})