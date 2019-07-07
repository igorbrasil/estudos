const mongose = require('mongoose')
mongose.Promise = global.Promise
module.exports = mongose.connect('mongodb://localhost/todo')
