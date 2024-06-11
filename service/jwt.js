const jwt = require("jsonwebtoken");

module.exports = {
  sign: (payload) => {
    return jwt.sign(payload, "tipiutpu");
  },
  verivy: (token) => {
    return jwt.verify(token, "tipiutpu");
  },
};
