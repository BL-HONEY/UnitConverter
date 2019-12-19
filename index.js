var env = process.env.NODE_ENV || "local";
var server = require("./server/")( env );