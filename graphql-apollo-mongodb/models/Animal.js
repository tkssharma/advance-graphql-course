const mongoose = require('mongoose');

const Animal = mongoose.model('Animal', {name: String })

module.exports = Animal;
