(() => {
  var __getOwnPropNames = Object.getOwnPropertyNames;
  var __commonJS = (cb, mod) => function __require() {
    return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
  };

  // add.js
  var require_add = __commonJS({
    "add.js"(exports, module) {
      add = (a, b) => {
        return a + b;
      };
      module.exports = add;
    }
  });

  // multiply.js
  var require_multiply = __commonJS({
    "multiply.js"(exports, module) {
      multiply = (a, b) => {
        return a * b;
      };
      module.exports = multiply;
    }
  });

  // index.js
  var add2 = require_add();
  var multiply2 = require_multiply();
  console.log("Hello from the developer console!");
  console.log(new Date());
  console.log(multiply2(add2(2, 2), 4));
})();
