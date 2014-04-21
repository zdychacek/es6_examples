var fn = [];
const n = 5;

// try to change i declaration to var
for (let i = 0; i < n; i++) {
  fn.push(fn => i);
}

expect(fn[4]() === 4).to.be.true;
expect(fn[0]() === fn[n - 1]()).to.be.false;
