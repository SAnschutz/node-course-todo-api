// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');



MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if (err) {
        return console.log('Unable to connect to MongoDB server');
    }
    console.log('Connected to MongoDB server.');

    //deleteMany
    // db.collection('Todos').deleteMany({text: 'Eat lunch'}).then((result) => {
    //     console.log(result);
    // });

    // db.collection("Users").deleteMany({name: 'George'}).then((result) => {
    //     console.log(result);
    // })

    //deleteOne
    // db.collection("Todos").deleteOne({text: "Eat lunch"}).then((result) => {
    //     console.log(result);
    // });


    //findOneAndDelete
    // db.collection("Todos").findOneAndDelete({completed: false}).then((result) => {
    //     console.log(result);
    // })

    db.collection("Users").findOneAndDelete({
        _id: new ObjectID("5c470bc8475a9b13f1f6c0eb")
    }).then((result) => {
        console.log(result);
    }, (err) => {
        console.log(`Error: ${err}`);
    });


    // db.close();
});