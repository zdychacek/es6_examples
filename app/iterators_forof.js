var fibonacci = {
  [Symbol.iterator]() {
    var pre = 0;
    var cur = 1;

    return {
      next() {
        [ pre, cur ] = [ cur, pre + cur ];
        return { done: false, value: cur };
      }
    }
  }
}

for (var n of fibonacci) {
  if (n > 100) {
    break;
  }

  //console.log(n);
}

// Generators version
var fibonacci = {
  [Symbol.iterator]: function*() {
    var pre = 0;
    var cur = 1;

    for (;;) {
      [ pre, cur ] = [ cur, pre + cur ];

      yield cur;
    }
  }
}

for (var n of fibonacci) {
  if (n > 1000) {
    break;
  }

  //console.log(n);
}
