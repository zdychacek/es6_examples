// Math extensions
expect(Number.EPSILON).to.be.defined;
expect(Number.isInteger(2.4)).to.be.false;
expect(Number.isNaN('NaN')).to.be.false;
expect(Math.acosh(3)).to.be.eql(1.762747174039086);
expect(Math.hypot(3, 4)).to.be.eql(5);
expect(Math.imul(Math.pow(2, 32) - 1, Math.pow(2, 32) - 2)).to.be.equal(2);

// String extensions
expect('abcde'.contains('cd')).to.be.true;
expect('abc'.repeat(3)).to.be.equal('abcabcabc');

// Array extensions
expect(Array.from(document.querySelectorAll('*'))).to.be.instanceof(Array);
expect(Array.of(1, 2, 3)).to.be.eql([1, 2, 3]);

expect([0, 0, 0].fill(7, 1)).to.be.eql([0, 7, 7]);
expect([1, 2, 3].findIndex(x => x == 2)).to.be.equal(1);

let array = ['a', 'b', 'c'];

let entriesIt = array.entries();
expect(entriesIt.next().value).to.be.eql([0, 'a']);
expect(entriesIt.next().value).to.be.eql([1, 'b']);

let keysIt = array.keys();
expect(keysIt.next().value).to.be.equal(0);
expect(keysIt.next().value).to.be.equal(1);

let valuesIt = array.values();
expect(valuesIt.next().value).to.be.equal('a');
expect(valuesIt.next().value).to.be.equal('b');

// Object extensions
class Point {
  constructor (x, y) {
    this.x = x;
    this.y = y;
  }
}

let myPoint = new Point(10, 20);

Object.assign(myPoint, { origin: new Point(0, 0) });
expect(myPoint).property('origin').to.be.defined;
expect(Object.is(NaN, NaN)).to.be.true;

// Extended ES5 style subclassing
function MyPromise (resolver) {
  Promise.call(this, resolver);
}
// set prototype chain
Object.setPrototypeOf(MyPromise, Promise);
// extend prototype with new method
Object.assign(MyPromise.prototype, {
  test () {
    // do something...
  }
});

// New numbers literals
expect(0b111110111).to.be.equal(503);
expect(0o767).to.be.equal(503);

// Maps
var map = new Map();
map.set('John', 25);
map.set('Alice', 400);
map.set(['meh'], 555);
expect(map.get(['meh'])).to.be.undefined;
map.delete('Alice');
map.keys();
map.values();
expect(map.size).to.be.equal(2);

// Sets
var set = new Set();
set.add(1);
set.add(5);
set.has(1);
expect(set.has(4)).to.be.false;
set.delete(5);
