const {ObjectID} = require('mongodb');
const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user')
// const id = '5c4faf96a03e18d70e43f63ce';

// if (!ObjectID.isValid(id)) {
//     console.log('ID not valid');
// };

// Todo.find({
//     _id: id
// }).then((todos) => {
//     console.log(`Todos: ${todos}`);
// });

// Todo.findOne({
//     completed: false
// }).then((todo) => {
//     console.log(`One todo: ${todo}`);
// });

// Todo.findById(id).then((todo) => {
//     if (!todo) {
//         return console.log('ID not found')
//     }
//     console.log(`Found by id: ${todo}`);
// }).catch((e) => console.log(e));

const userId = "5c486bdf5d505c341e55d58e";

User.findById(userId).then((user) => {
    if (!user) {
        return console.log('User ID not found');
    }

    console.log(`User: ${user}`);
}, (e) => console.log(JSON.stringify(e, undefined, 2)));