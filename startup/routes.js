const express = require("express");
const schools = require("../routes/schools");
const error = require("../middleware/error");

module.exports = function(app){
    app.use(express.json());
    app.use('/api/schools', schools);
    app.use(error);
}