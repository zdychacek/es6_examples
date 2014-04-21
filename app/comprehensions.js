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

expect(results).to.have.length(2);
expect(results[0]).property('name', 'Joe');
expect(results[1]).property('name', 'Brad');

// Generator comprehensions (lazy loading)
var results = (
  for (c of customers)
    if (c.city == 'Seattle')
      { name: c.name, age: c.age }
);

expect(results.next()).property('value').property('name', 'Joe');
expect(results.next()).property('value').property('name', 'Brad');
