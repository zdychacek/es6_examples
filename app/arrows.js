var evens = [0, 2, 4, 6, 8, 10, 12, 14, 16];
var fives = [];

// Expression bodies
var odds = evens.map(v => v + 1);
var nums = evens.map((v, i) => v + i);

// Statement bodies
nums.forEach(v => {
  if (v % 5 === 0) {
    fives.push(v);
  }
});

console.log('fives:', fives);

// Lexical this
var bob = {
  _name: 'Bob',
  _friends: ['John', 'Jack'],
  printFriends() {
    this._friends.forEach(f => console.log(this._name + ' knows ' + f));
  }
}

bob.printFriends();
