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

    

    //agregate
    db.collection('Users')
        .aggregate(
            { "$group": { "_id": "$name", "count": { "$sum": 1 } } },
            { "$match": { "_id": { "$ne": null }, "count": { "$gt": 1 } } },
            { "$project": { "name": "$_id", "_id": 0 } }).toArray().then((result) => {

                console.log(result);

                client.close();
            });


});