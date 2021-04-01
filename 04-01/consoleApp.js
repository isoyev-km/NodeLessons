const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.on("line", (cmd) => {
  console.log(`you just typed ${cdm}`);
});

rl.question("what is ur name?", (answer) => {
  console.log(`Nice to meet u ${answer}!`);
});

// rl.pause()
rl.close(); //close readline interface
