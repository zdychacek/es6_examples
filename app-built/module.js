define([], function() {
  "use strict";
  var __moduleName = "module";
  var test = 'es6!';
  var MyClass = function MyClass() {
    console.log('ES6 Class!');
  };
  ($traceurRuntime.createClass)(MyClass, {}, {});
  return {
    get test() {
      return test;
    },
    get MyClass() {
      return MyClass;
    },
    __esModule: true
  };
});
