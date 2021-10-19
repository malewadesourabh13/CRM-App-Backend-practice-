var express = require('express');
var router = express.Router();
const mongoose = require('mongoose');
const StudentModel = require('../models/student-model');

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with students resource');
});


router.post('/add', function(req, res, next) {

//    console.log(req.body);
    let newStudent = new StudentModel({  
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        age: req.body.age,
        dob: req.body.dob,
        department: req.body.department   
    })

    newStudent.save((err, newStudent) => {
        if(err) {
             res.send(err)
        } else {
        res.send({ status : 200, message: 'User added successfully', 
        studentObj : newStudent } );
        }    
    })   
});


router.get('/list', function(req, res, next) {
    
    StudentModel.find((err, response) => {
        if(err) {
             res.send(err)
        } else {
        res.send({ status : 200, students: response} );
        }    
    })   
});



router.get('/searchByLastName', function(req, res, next) {
    const lastNameQurey = req.query.lastName
    StudentModel.find({lastName: lastNameQurey },(err, response) => {
        if(err) {
             res.send(err)
        } else {
        res.send({ status : 200, students: response} );
        }    
    })   
});

//students update
router.put('/update', function(req, res, next) {
    const department = req.query.department
    StudentModel.update({age : 25, dob : "13/08/1996" }, {department : department},(err, response) => {
        if(err) {
             res.send(err)
        } else {
        res.send({ status : 200, students: response} );
        }    
    })   
});

router.put('/updateUser', function(req, res, next) {
    const id = req.query.id 
    const dob = req.query.dob
    StudentModel.findByIdAndUpdate(id, {dob : dob  },(err, response) => {
        if(err) {
             res.send(err)
        } else {
        res.send({ status : 200, students: response} );
        }    
    })   
});


//findOneAndUpdate
router.put('/updateUserf', function(req, res, next) {
    const dob = req.query.dob
    const lastNameQurey = req.query.lastName
    StudentModel.findOneAndUpdate({dob : dob},{lastName : lastNameQurey }, (err, response) => {
        if(err) {
             res.send(err)
        } else {
        res.send({ status : 200, students: response} );
        }    
    })   
});


router.delete('/deleteUser', function(req, res, next) {
    const id = req.query.id
  /*   const lastNameQurey = req.query.lastName */
    StudentModel.findByIdAndDelete(id, (err, response) => {
        if(err) {
             res.send(err)
        } else {
        res.send({ status : 200, students: response} );
        }    
    })   
});


module.exports = router;