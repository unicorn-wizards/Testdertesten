const express = require('express')
const app = express()

app.get('/', function (req, res) {
  res.send('"Hello world plox plox for realz"')
})

app.listen(3001)