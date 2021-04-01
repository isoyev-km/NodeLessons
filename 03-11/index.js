// console.log("Hello world");

const { sum, randomString } = require("./main");
const example = require("./example");
const Service = require("./service");

console.log(sum(20, 8));
console.log(randomString());

console.log(example);

console.log(Service);

console.log(example.sub(100, 75));

console.log(example.multiply(2, 20));

console.log(new.Service().get());
