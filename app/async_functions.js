function timeout (ms) {
  return new Promise((resolve) => {
    setTimeout(resolve, ms);
  });
}

async function asyncValue (value) {
  await timeout(2000);

  return value;
}

async function _do () {
  // wait for function asyncValue returns
  var value = await asyncValue(42);

  return 28;
}

// async function returns Promise with function returning value
_do().then((retValue) => { /* do some work with returned value */ });
