// Data Type; String, Numbers, Boolean, null, undefined

const name = 'John';
const age = 30;
const rating = 4.5;
const isCool = true;
const x = null;
const y = undefined;
let z;

console.log(typeof name);
console.log(typeof age);
console.log(typeof rating);
console.log(typeof isCool);
console.log(typeof x);
console.log(typeof y);
console.log(typeof z);

//===================================String

//Concatenation
console.log('My name is ' + name + ' and I am ' + age);
// Template String
console.log(`My name is ${name} and I am ${age}`);

const hello = `My name is ${name} and I am ${age}`; // assign variable

console.log(hello);

// length
const s = 'Hello World!';

console.log(s.length);
console.log(s.toUpperCase());
console.log(s.toLowerCase());
console.log(s.substring(0,5));
console.log(s.substring(0,5).toUpperCase());
console.log(s.split(''));

//creating array
const x1 = 'technology, computers, it,code';
console.log(x1.split(', '));

const fruits = ['apple', 'oranges', 'pears'];
fruits[3] = 'grapes';
fruits.push('mangos');
fruits.unshift('straberries');
fruits.pop();



console.log(fruits);
console.log(fruits[1]);
console.log(Array.isArray('hello'));
console.log(fruits.indexOf('oranges'));

//=========================================objects literal

const person = {
    firstName: 'John',
    lastName: 'Doe',
    age : 30,
    hobbies: ['music', 'movies', 'sports'],
    address: {
        street: '50 main st',
        city: 'Boston',
        state: 'MA'
        }
    }
console.log(person);
console.log(person.firstName);
console.log(person.lastName);
console.log(person.address.city);
const {firstName, lastName} = person;

person.email = 'john@gmail.com';
console.log(person);

//====================================

const todos = [
{
    id: 1,
    text : 'Take out trash',
    isCompleted: true
},
{
    id: 2,
    text: 'Meeting with boss',
    isCompleted: true
},
{
    id: 3,
    text: 'Dentist appt',
    iscompleted: false 
}
];

const todoJSON = JSON.stringify(todos); // formatting to JSON
console.log(todoJSON);

//===== For Loop

for(let i = 0; i <= 10; i++){
    console.log(`For Loop Number: ${i}`);
}

// ==== While Loop

let i = 0;
while (i<10){
    console.log(`While Loop Number: ${i}`);
    i++;
}


//---------For Loop on array

for(let i = 0; i < todos.length; i++){
    console.log(todos[i].text);
}

for(let todo of todos){
    console.log(todo);
    console.log(todo.text);
}

// forEach, map, filter

todos.forEach(function(todo){
    console.log(todo.text);
});

const todoText = todos.map(function(todo){
    return todo.text;
});
console.log(todoText);


const todoCompleted = todos.filter(function(todo){
    return todo.isCompleted === true;
}).map(function(todo){
    return todo.text;
})
console.log(todocompleted);