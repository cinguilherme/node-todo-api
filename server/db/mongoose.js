var mongoose = require('mongoose');

const url = 'mongodb://localhost:27017';
const dbName = 'TodoApp';

mongoose.Promise = global.Promise;

mongoose.connect(`${url}/${dbName}`);


module.exports = { mongoose };