const winston = require("winston");
require("express-async-errors");

module.exports = function(){
    winston.exceptions.handle(
        new winston.transports.Console({colorize:true, prityPrint:true}),
        new winston.transports.File({filename: 'uncaughtExceptions.log'})
    );
    process.on('unhandledRejection', (ex) => {
        throw ex;
    });
    winston.add(
        new winston.transports.File({filename:'logfile.log'})); 
    //winston.add(new winston.transports.File, { filename: 'logfile.log', timestamp: true });
//      winston.add(winston.transports.MongoDB, { 
//     db: 'mongodb://127.0.0.1:27017/school',
//     level: 'info'
//   }); 
}