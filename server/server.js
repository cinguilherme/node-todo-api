var express = require('express');
var bodyParser = require('body-parser');

var { mongoose } = require('./db/mongoose');
var { Todo } = require('./models/todo');
var { User } = require('./models/user');

var port = 3000;

var app = express();

app.use(bodyParser.json());//understand whats going on here...

app.post('/todos', (req, res) => {

    var todo = new Todo({
        text: req.body.text
    });

    todo.save().then((doc) => {

        res.send(doc);
    }, (e) => {
        res.status(400).send(e);
    });

});

app.listen(port, () => {

    console.log(`app is up on the port ${port}`);
});