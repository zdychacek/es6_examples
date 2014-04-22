function f1(x, y = 12) {
  // y is 12 if not passed (or passed as undefined)
  return x + y;
}
expect(f1(3)).to.be.equal(15);

function f2(x, ...y) {
  // y is an Array
  return x * y.length;
}
expect(f2(3, 'hello', true)).to.be.equal(6);

function f3 (x, y, z) {
  return x + y + z;
}
// Pass each elem of array as argument
expect(f3(...[1,2,3])).to.be.equal(6);

// merge arrays into one
let arr1 = [1, 2];
let arr2 = [5, 6];

expect([...arr1, 3, 4, ...arr2]).to.be.eql([1, 2, 3, 4, 5, 6]);
