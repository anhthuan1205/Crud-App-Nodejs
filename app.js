var express = require('express');
var cors = require('cors');
var bodyParser = require('body-parser');
var port = process.env.SERVET_PORT || 3000;
var user = require('./route/UserRoute');
var logger = require('./config/logger');
require('dotenv').config();

var app = express();

app.use(cors());

app.use('/api', user);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.listen(port, function() {
    logger.info('Server is running on port: ' + port);
});