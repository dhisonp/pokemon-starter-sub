const fs = require("fs");
let types = JSON.parse(fs.readFileSync("types.json"));

let x = types.map((t) => [t.name, t.strengths]);
x = Object.fromEntries(x);
console.log(x);
