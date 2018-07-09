require('dotenv').config();
var express = require('express');
var app = express();
var user = require('./controllers/usercontroller');
var tevent = require('./controllers/eventscontroller.js');
var team = require('./controllers/teamscontroller.js');
var sequelize = require('./db');
var bodyParser = require('body-parser');
var cors = require('cors')

sequelize.sync();

app.use(cors());
app.use(bodyParser.json());
app.use('/api/user', user) ;
app.use('/api/tevent', tevent);
app.use('/api/team', team);

app.listen(process.env.PORT, () => {
    console.log(`Server is listening on port ${process.env.PORT}`)
});