const {School, validate} = require("../models/school");
const mongoose = require("mongoose");
const express = require("express");
const router = express.Router();

router.get('/' , async (req, res) => {
    const schools = await School.find().sort('name');
    res.send(schools);
});

router.post('/', async (req, res) => {
    const { body } = req;
    const {error}  =  validate(req.body); 
    //console.log("error message", validate(req.body));

  if (error) {
    return  res.status(422).json({ 
        message: error.details, 
        data: body 
      }) ; 
   // res.status(400).send(error.details[0].message);
}

    let school = new School({
        name:req.body.name,
        email:req.body.email,
        phone:req.body.phone,
        isActive:req.body.isActive,
        isDeleted: req.body.isDeleted
    });

    school = await school.save();
    res.send(school)
} );

module.exports = router; 