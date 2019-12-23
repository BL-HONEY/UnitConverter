const
    express = require('express'),
    app = express(),
    bodyParser = require('body-parser'),
    cors = require('cors'),
    expressValidator = require('express-validator'),
    router = require('./routers/router');

require("dotenv").config();
app.use(cors())

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: false
}));
// app.use(expressValidator());
app.use('/api', router);

const loadEnvBasedConfig = (env) => {
    config = require("./config/"+env);
    app.listen(config.PORT, function(){
        console.log("You are connect to %s environment",env);
        console.log("Application is listening to PORT %d ...." , config.PORT);
    })
}

module.exports = loadEnvBasedConfig;