const winston = require("winston");
const mongoose = require("mongoose");
const config = require("config");




async function main() {
    const db = config.get('db');
    mongoose.set("strictQuery", false);
   await mongoose.connect(db);
   
   // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
 }

 module.exports = async function() {
    
  await main()
  //.then(() => winston.info("databse connected"))
  //.catch(err => console.log(err))
  ;
}