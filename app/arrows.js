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

// Lexical this
var bob = {
  _name: 'Bob',
  _friends: ['John', 'Jack'],
  printFriends() {
    return this._friends.map(friend => `${this._name} knows ${friend}.`).join(' ');
  }
}

expect(bob.printFriends()).to.have.string('John').and.to.have.string('Jack');
