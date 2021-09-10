const express = require("express")
const router = express.Router()
const {redirectToLogin} = require('../middleware')

router.get("/", redirectToLogin, (req, res) => {
  res.send(`<h1>Welcome to the home page!</h1>
  <a href="/logout">Logout</a>`)
})

module.exports = router