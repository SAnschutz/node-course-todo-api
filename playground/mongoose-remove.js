const {ObjectID} = require('mongodb');
const {mongoose} = require('../server/db/mongoose');
const {Todo} = require('../server/models/todo');
const {User} = require('../server/models/user');

// Todo.remove({}).then((result) => {
//     console.log(result);
// });
//REMOVES ALL TODOS!!!! 
//result showS success and number of docs removed -- doesn't return the removed docs

Todo.findByIdAndRemove('5c787fe6dcaf67f0416885b7').then((todo) => {
    console.log(todo);
});

// Todo.findOneAndRemove({completed: 'true'}), then((todo) => {
//     console.log(todo);
// });
//returns the deleted doc