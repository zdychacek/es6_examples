var customers = [
  { name: 'Joe', city: 'Seattle', age: 30 },
  { name: 'Jack', city: 'Tennessee', age: 26 },
  { name: 'Brad', city: 'Seattle', age: 24 }
];

// Array comprehensions
var results = [
  for (c of customers)
    if (c.city == 'Seattle')
      { name: c.name, age: c.age }
];

console.assert(
  JSON.stringify(results).contains('Joe') &&
  JSON.stringify(results).contains('Brad')
, 'Joe or Brad are not our customers.');

// Generator comprehensions (lazy loading)
var results = (
  for (c of customers)
    if (c.city == 'Seattle')
      { name: c.name, age: c.age }
);

console.assert(results.next().value.name === 'Joe', 'First customer is not Joe.');
console.assert(results.next().value.name === 'Brad', 'Second customer is not Brad.');
