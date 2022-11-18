let express = require('express');
let router = express.Router();
let mongoose = require('mongoose');

// CONNECT TO monster MODEL
let Monster = require('../models/monster');
let monsterController = require('../controller/monster');

/* CRUD OPERATIONS*/

// READ OPERATION
// GET ROUTE FOR monster LIST
router.get('/', monsterController.displayMonsterList);

// CREATE OPERATION
// GET ROUTE FOR DISPLAYING THE CREATE PAGE
router.get('/create', monsterController.displayCreatePage);

// POST ROUTE FOR PROCESSING THE ADD OPERATION
router.post('/create', monsterController.processCreatePage);


// UPDATE OPERATION
// GET ROUTE FOR DISPLAYING THE UPDATE PAGE
router.get('/update/:id', monsterController.displayUpdatePage);

// POST ROUTE FOR PROCESSING THE UPDATE OPERATION
router.post('/update/:id', monsterController.processUpdatePage);

// DELETE OPERATION
// PERFORM THE DELETE OPERATION
router.get('/delete/:id', monsterController.performDelete);

module.exports = router;