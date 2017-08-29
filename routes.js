const express = require('express');
const router = express.Router();
const Student = require('./models/student');

router.get('/students',function(req,res){
  Student.find({}).then(function(result){
    res.send(result);
  });
});

router.get('/students/:id',function(req,res){
  Student.findOne({_id:req.params.id}).then(function(result){
    res.send(result);
  });
});

router.post('/students',function(req,res,next){
  const {name,age} = req.body;
  Student.create(req.body)
  .then(function(result){
    res.send(result);
  })
  .catch(next);
});

router.put('/students/:id',function(req,res){
  Student.findOneAndUpdate({_id:req.params.id},req.body).then(function(result){
    Student.findOne({_id:req.params.id}).then(function(student){
        res.send(student);
    })
  });
});

router.delete('/students/:id',function(req,res){
  Student.findOneAndRemove({_id:req.params.id}).then(function(result){
    res.send(result);
  });
});

module.exports = router;
