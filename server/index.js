const
    express = require('express'),
    app = express(),
    bodyParser = require('body-parser'),
    expressValidator = require('express-validator'),
    router = require('./routers/router');

require("dotenv").config();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: false
}));

app.use(function (req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE,OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type,x-access-token');
    res.setHeader('Access-Control-Allow-Credentials', true);
    next();
});
// app.use(expressValidator());
app.use('/api', router);

loadEnvBasedConfig = (env) => {
    config = require("./config/"+env);
    app.listen(config.PORT, function(){
        console.log("You are connect to %s environment",env);
        console.log("Application is listening to PORT %d ...." , config.PORT);
    })
}

module.exports = loadEnvBasedConfig;