let express = require('express');
let router = express.Router();
let mongoose = require('mongoose');

// CONNECT TO monster MODEL
let Monster = require('../models/monster');

// READ OPERATION
// GET ROUTE FOR monster LIST
router.get('/',(req,res,next)=> {
    Monster.find((err, MonsterList)=> {
        if(err)
        {
            return console.log(err);
        }
        else
        {
            console.log(MonsterList);
        }
    }); 
});

module.exports = router;