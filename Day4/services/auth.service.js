const users = require("../mock");

exports.getUserByEmailAndPassword = (email, password) => {
  return users.find(
    (user) => user.email === email && user.password === password
  );
};
