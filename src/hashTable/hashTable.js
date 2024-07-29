// maps key to value

const hashTable = {};


hashTable ['name'] = 'john';
hashTable ['profession'] = 'Software Engineer';
hashTable ['gender'] = 'male';

console.log("gender" in hashTable) // true
delete hashTable['gender']
console.log("gender" in hashTable) // false


// using Map class
//The Map class in JavaScript is a more versatile way to create hash tables.
// methods like get,delete and set can be used

const hashTable = new Map();

hashTable.set('name', 'John');
hashTable.set('profession', 'Software Engineer');
hashTable.set('gender', 'male');

console.log(hashTable.get('name')); 
hashTable.delete('profession');
console.log(hashTable.has(('gender')))
console.log(hashTable)

hashTable.forEach((key, value) => {
    console.log(`${key} : ${value}`)
});