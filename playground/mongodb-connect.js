const MongoClient = require('mongodb').MongoClient;

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

    // db.collection('Todos').insertOne(
    //     { text: 'something to do ', completed: false }
    //     , (err, result) => {
    //         if(err){
    //             return console.log('unnable to insert todo ', err);
    //         }
    //         console.log('todo inserted ', JSON.stringify(result.ops, undefined, 2));
    //     })

    db.collection('Users').insertOne({
        name: 'Guilherme',
        age: 32,
        location: 'Recife'
    }, (err, result) => {
        if (err) {
            return console.log('unnable to insert user ', err);
        }
        console.log('user inserted ', JSON.stringify(result.ops, undefined, 2));
    });

    client.close();

});