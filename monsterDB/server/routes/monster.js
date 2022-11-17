let express = require('express');
let router = express.Router();
let mongoose = require('mongoose');

// CONNECT TO monster MODEL
let Monster = require('../models/monster');

/* CRUD OPERATIONS*/

// READ OPERATION
// GET ROUTE FOR monster LIST
router.get('/',(req,res,next)=> {
    Monster.find((err, monsterList)=> {
        if(err)
        {
            return console.log(err);
        }
        else
        {
            // console.log(monsterList)
            res.render('monster', {
                title: 'Monster List', 
                MonsterList: monsterList
            });
        }
    }); 
});

// ADD OPERATION
// GET ROUTE FOR DISPLAYING THE ADD PAGE
router.get('/add',(req,res,next)=> {

});

// POST ROUTE FOR PROCESSING THE ADD OPERATION
router.post('/add',(req,res,next)=> {

});


// EDIT OPERATION
// GET ROUTE FOR DISPLAYING THE UPDATE PAGE
router.get('/edit/:id',(req,res,next)=> {

});

// POST ROUTE FOR PROCESSING THE UPDATE OPERATION
router.post('/edit/:id',(req,res,next)=> {

});

// DELETE OPERATION
// PERFORM THE DELETE OPERATION
router.get('/delete/:id',(req,res,next)=> {

});

module.exports = router;