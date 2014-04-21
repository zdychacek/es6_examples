var fn = [];
const n = 5;

// try to change i declaration to var
for (let i = 0; i < n; i++) {
  fn.push(fn => i);
}

console.assert(fn[4]() === 4, 'Function does not return correct value.');
console.assert(fn[0]() !== fn[n - 1](), 'Return values of different calls are same.');
