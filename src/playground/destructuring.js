// Object destructuring

// const person = {
//   age: 26,
//   location: {
//     city: 'Philadelphia',
//     temp: 92,
//   }
// };

// const { name = 'Anonymous' , age } = person;

// const { city, temp: temperature } = person.location;

// console.log(`${name} is ${age}.`);
// console.log(`It's ${temperature} in ${city}.`);

// const book = {
//   title: 'Ego is the Enemy',
//   author: 'Ryan Holiday',
//   publisher: {
//     name: 'Penguin'
//   }
// };

// const { name: publisherName = 'Self-Published' } = book.publisher;

// console.log(publisherName); // Penguin, Self-Published

// Array destructuring

const address = ['1229 S Juniper Street', 'Philadelphia', 'Pennsylvania', '19147'];
const [ , city, state = 'New York', zip ] = address;
console.log(`You are in ${city} ${state}.`);

const item = ['Coffe (hot)', '$3.00', '$3.50', '$3.75'];

const [product, , cost] = item

console.log(`A medium ${product} costs ${cost}`);