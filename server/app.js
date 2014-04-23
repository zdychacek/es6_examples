function timeout (ms) {
  return new Promise((resolve) => {
    setTimeout(resolve, ms);
  });
}

async function asyncValue (value) {
  await timeout(2000);
  return value;
}

(async function() {
  console.log('[async fun] waiting ...');
  var value = await asyncValue(42);
  console.log('[async fun] got value ' + 42);
})();

console.log('normal program flow ...');
