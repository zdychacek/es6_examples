function handler () {
  console.log('Handler is called...');
}

var theProtoObj = {
  doThat: () => console.log('Doing that...')
};

var obj = {
    // __proto__
    __proto__: theProtoObj,
    // Shorthand for ‘handler: handler’
    handler,
    // Methods
    toString () {
      return 'object';
    },
    // Computed (dynamic) property names
    [ 'prop_' + (() => 42)() ]: 42
};

console.assert(
  'prop_42' in obj &&
  typeof obj.handler === 'function'
);
