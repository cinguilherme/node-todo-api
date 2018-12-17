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

    // var ret = db.collection('Users').find().toArray().then((docs) => {

    //     console.log('all users in here ', docs);
    
    //     client.close();
    // }, (err) => {
    //     console.log('error in fetching docs ', err);
    //     client.close();
    // });

    var ret = db.collection('Users').find().toArray().then((docs) => {

        console.log('all users in here ', docs);
    
        client.close();
    }, (err) => {
        console.log('error in fetching docs ', err);
        client.close();
    });


    

});