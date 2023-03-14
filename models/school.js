
const Joi = require("joi");
const mongoose = require("mongoose");


const School = mongoose.model('School', new mongoose.Schema({
    name:{
        type:String,
        required:true,
        minlength:5,
        maxlength:500
    },
    phone:{
        type:String,
        required:true,
        minlength:10,
        maxlength:13
    },
    email:{
        type:String,
        required:true,
        minlength:5,
        maxlength:50
    },
    isActive:{
        type:Boolean,
        default:false
    },
    isDeleted:{
        type:Boolean,
        default:false
    }

}));

 function  validateSchool(school){
    //console.log(school);
    

const schema = Joi.object().keys({
    name:Joi.string().min(5).max(500).required(),
    email:Joi.string().min(5).max(50).required(),
    phone:Joi.string().min(10).max(13).required(),
    isActive:Joi.boolean(),
    isDeleted:Joi.boolean()
});
//console.log("school validation",schema.validate(school).error.details[0].message);
    return  schema.validate(school, {abortEarly: false});
};

exports.School = School;
exports.validate=validateSchool;