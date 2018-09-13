const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

//let id = '5b99d0fd285ea50cfb2fbc6b11';

/*
Todo.find({
	_id: id
}).then((todos) => {
	console.log('Todos', todos);
});
*/
/*
Todo.findOne({
	_id: id
}).then((todo) => {
	console.log('Todo', todo);
});
*/

/*
if(!ObjectID.isValid(id)) {
	console.log('ID not valid');
}
*/

/*
Todo.findById(id).then((todo) => {

	if(!todo) {
		return console.log('Id not found');
	}
	console.log('Todo By Id', todo);
}).catch((err) => console.log(err));
*/

let id = '5b986500633c960ab78a13e9';

User.findById(id).then((user) => {

	if(!user) {
		return console.log('User not found');
	}
	console.log(JSON.stringify(user, undefined, 2));
}).catch((err) => console.log(err));



