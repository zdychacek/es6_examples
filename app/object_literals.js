function handler () {
  var x = 5;
  var y = 6;

  // returning values from current scope in object literal
  return {
    x, y
  };
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

expect(obj).to.have.property('prop_42');
expect(obj.handler).to.be.a('function');
expect(obj.handler()).to.be.eql({ x: 5, y: 6});
