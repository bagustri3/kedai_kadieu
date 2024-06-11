const app = require("express").Router();

module.exports = app
  .use("/items", require("./items"))
  .use("/order", require("./order"))
  .use('/table', require('./table'))
  .use('/customer', require('./customer'))
  ;
