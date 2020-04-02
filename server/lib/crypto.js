const bcrypt = require('bcrypt');

const saltRounds = 10;

const hashPassword = (rawPassword) => {
  return bcrypt.hash(rawPassword, saltRounds);
};

const comparePassword = (inputHash, userHash) => {
  return bcrypt.compare(inputHash, userHash);
};

module.exports = {
  hashPassword,
  comparePassword
};