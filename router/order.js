const app = require("express").Router();

module.exports = app.get('/', async (req, res) => {
    res.send('Hello')
})