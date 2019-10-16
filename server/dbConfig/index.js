const mongoose = require("mongoose");

mongoose.Promise = global.Promise;

mongoose.connect("mongodb://graph-todo:user123@ds157707.mlab.com:57707/graph-todo", {
    useNewUrlParser: true
});

module.exports = { mongoose };