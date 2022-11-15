let mongoose = require('mongoose');

// CREATE monster MODEL

let monsterModel = mongoose.Schema({
    name: String,
    locale: String,
    description: String,
    difficulty: Number
})