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
