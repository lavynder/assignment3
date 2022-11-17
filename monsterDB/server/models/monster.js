let mongoose = require('mongoose');

// CREATE monster MODEL

let monsterModel = mongoose.Schema({
    name: String,
    locale: String,
    description: String,
    difficulty: Number
    },
    {
        collection: "monster"
    }
);

module.exports = mongoose.model("monster", monsterModel);
