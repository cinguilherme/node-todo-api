const expect = require('expect');
const request = require('supertest');

var { app } = require('./../server');
const { Todo } = require('./../models/todo');

beforeEach('clear todos docs before each test', (done) => {

    Todo.remove({}).then(() => done());
});

describe('POST /todos', () => {

    it('should create a new todo', (done) => {

        var text = 'testing text';

        request(app).post('/todos')
            .send({ text })
            .expect(200)
            .expect((res) => {
                expect(res.body.text).toBe(text);
            }).end((err, res) => {

                if (err) {
                    throw new Error(err);
                }

                Todo.find().then((todos) => {

                    expect(todos.length).toBe(1);
                    expect(todos[0].text).toBe(text);
                    done();

                }).catch((err) => done(err));

            });

    });

    it('should not create todo with invalid data', (done) => {

        var text = '';

        request(app).post('/todos').send({ text })
            .expect(400).end((err, res) => {

                if(err) {
                    throw new Error(err);
                }

                Todo.find().then((todos) => {

                    expect(todos.length).toBe(0);
                    done();
                }).catch((e) => done(e));

            });
            
    });
});