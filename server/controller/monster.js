let express = require('express');
let router = express.Router();
let mongoose = require('mongoose');

// CONNECT TO monster MODEL
let Monster = require('../models/monster');

/* CRUD OPERATIONS*/

// READ
module.exports.displayMonsterList = (req,res,next)=> {
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
}

// CREATE
// DISPLAY
module.exports.displayCreatePage = (req,res,next)=> {
    res.render('monster/create', 
    {title: 'Create Monster'});
}

// PROCESS
module.exports.processCreatePage = (req,res,next)=> {
    let newMonster = Monster ({
        'name':req.body.name,
        'locale':req.body.locale,
        'description':req.body.description,
        'difficulty':req.body.difficulty
    });
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
    });
}


// UPDATE
// DISPLAY
module.exports.displayUpdatePage = (req,res,next)=> {
    let id = req.params.id;
    Monster.findById(id, (err, monsterUpdate) =>{
        if(err)
        {
            console.log(err);
            res.end(err);
        }
        else
        {
            res.render('monster/update', 
            {title: 'Update Monster', 
            monster: monsterUpdate
            });
        }
    });
}

// PROCESS
module.exports.processUpdatePage = (req,res,next)=> {
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
}

// DELETE
module.exports.performDelete = (req,res,next)=> {
    let id = req.params.id;
    Monster.deleteOne({_id:id}, (err) =>{
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
}