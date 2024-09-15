// Hash

const { createHash } = require("crypto");

// Create a string hash

function hash(input) {
  return createHash("sha256").update(input).digest("hex");
}

let pass = "hi-cat!";
const hash1 = hash(pass);
console.log(hash1);

pass = "hi-cat";
const hash2 = hash(pass);
const match = hash1 === hash2;

console.log(match ? "good" : "bad");
