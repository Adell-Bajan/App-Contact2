const express = require('express');
const db = require('./models/db');
const path = require('path');
const exphbs = require('express-handlebars');
const bodyParser = require('body-parser');


// Init app
var app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Controller
const employeeController = require('./controllers/employeeControllers');

// Set 
app.set('views', path.join(__dirname, '/views/'));
app.engine('hbs', exphbs({ extname: 'hbs', defaultLayout: 'mainLayout', layoutsDir: __dirname + '/views/layouts/' }));
app.set('view engine', 'hbs');
// Middlwere
app.use('/employee', employeeController);

app.listen(5000, () => {
    console.log('Express server started at port :5000');
})