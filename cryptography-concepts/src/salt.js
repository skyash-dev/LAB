const { scryptSync, randomBytes, timingSafeEqual } = require("crypto");

function signup(email, password) {
  const salt = randomBytes(16).toString("hex");
  const hashedPassword = scryptSync(password, salt, 64).toString("hex");

  const user = { email, password: `${salt}:${hashedPassword}` };
  return user;
}

function login(email, password) {
  const user = users.find((v) => v.email === email);

  const [salt, key] = user.password.split(":");
  const hashedBuffer = scryptSync(password, salt, 64); // Buffer objects are used to store bytes.

  const keyBuffer = Buffer.from(key, "hex");
  const match = timingSafeEqual(hashedBuffer, keyBuffer);

  if (match) {
    return "login success!";
  } else {
    return "login fail!";
  }
}

let users = [];
const email = "johndoe@123.mail.com";
const password = "john-is-doe";

const user = signup(email, password);
users.push(user);
const match = login(email, password);
console.log(match);
console.log(user);
