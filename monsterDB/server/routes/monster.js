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
            res.render('monster/read', {
                title: 'Monster List', 
                MonsterList: monsterList
            });
        }
    }); 
});

// CREATE OPERATION
// GET ROUTE FOR DISPLAYING THE CREATE PAGE
router.get('/create',(req,res,next)=> {
    res.render('monster/create', 
    {title: 'Create Monster'});
});

// POST ROUTE FOR PROCESSING THE ADD OPERATION
router.post('/create',(req,res,next)=> {
    let newMonster = Monster ({
        'name':req.body.name,
        'locale':req.body.locale,
        'description':req.body.description,
        'difficulty':req.body.difficulty
    })
    Monster.create(newMonster, (err, Monster) => {
        if(err)
        {
            console.log(err);
            res.end(err);
        }
        else
        {
            res.redirect('/monster-list');
        }
    })
});


// UPDATE OPERATION
// GET ROUTE FOR DISPLAYING THE UPDATE PAGE
router.get('/update/:id',(req,res,next)=> {
    let id = req.params.id;
    Monster.findById(id, (err, monsterUpdate) =>{
        if(err)
        {
            console.log(err);
            res.end(err);
        }
        else
        {
            res.render('/monster/update', 
            {title: 'Update Monster', 
            monster: monsterUpdate
            });
        }
    });
});

// POST ROUTE FOR PROCESSING THE UPDATE OPERATION
router.post('/update/:id',(req,res,next)=> {
    let id = req.params.id;
    let updateMonster = Monster({
        '_id':id,
        'name':req.body.name,
        'locale':req.body.locale,
        'description':req.body.description,
        'difficulty':req.body.difficulty
    });
    Monster.updateOne({_id:id}, updateMonster, (err) =>{
        if(err)
        {
            console.log(err);
            res.end(err);
        }
        else
        {
            res.redirect('/monster-list')
        }
    });
});

// DELETE OPERATION
// PERFORM THE DELETE OPERATION
router.get('/delete/:id',(req,res,next)=> {
    let id = req.params.id;
    Monster.remove({_id:id}, (err) =>{
        if(err)
        {
            console.log(err);
            res.end(err);
        }
        else
        {
            res.redirect('/monster-list')
        }
        
    });

});

module.exports = router;