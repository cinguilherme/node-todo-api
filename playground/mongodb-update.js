const { MongoClient, ObjectID } = require('mongodb');

const url = 'mongodb://localhost:27017';
const dbName = 'TodoApp';

const client = new MongoClient(url);

client.connect((err) => {

    if (err) {
        console.log(err);
        return console.log('unnable to connect to database');
    }

    console.log('connection to db was successful');
    const db = client.db(dbName);

    db.collection('Users').update({
        name: 'reppy'
    },{
        $set: {
            name: 'reppy changed'
        },
        $inc: {
            age: 1
        }
    },{
        returnOriginal: false
    }).then((result) => {
        console.log(result);
        client.close();
    });

});