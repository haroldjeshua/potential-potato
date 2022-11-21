const _ = require("lodash");

const numbers = [33, 12312, 3545, 4233, 234234, 1234];

_.each(numbers, function (number, i) {
  console.log(number);
});
