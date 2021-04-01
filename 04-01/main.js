// // CommonJS
// const info = (msg) => {
//   console.log(`Log: ${msg}`);
// };

// const barr = (string) => {
//   console.log(`Nasha stroka: ${string}`);
// };

// module.exports = {
//   info,
//   barr,
// };

// // ECMAScript
// export const foo = () => {
//   console.log("Success!");
// };

const fs = require("fs").promises;

fs.readFile("readme.txt")
  .then((data) => console.log(data.toString()))
  .catch((err) => console.log(err.message));
