define(['./module'], function($__0) {
  "use strict";
  var __moduleName = "./app/main";
  if (!$__0 || !$__0.__esModule)
    $__0 = {'default': $__0};
  var $__1 = $traceurRuntime.assertObject($__0),
      test = $__1.test,
      MyClass = $__1.MyClass;
  console.log(test);
  new MyClass();
  var name = 'Ondrej';
  return {
    get name() {
      return name;
    },
    __esModule: true
  };
});
