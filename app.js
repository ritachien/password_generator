// Required modules and server related variables
const express = require('express')
const exphbs = require('express-handlebars')
const generatePassword = require('./generate_password')
const app = express()
const port = 3000

// Set template engine
app.engine('handlebars', exphbs({ defaultLayout: 'main' }))
app.set('view engine', 'handlebars')

// Set body-parser
app.use(express.urlencoded({ extended: true }))

// Route settings
app.get('/', (req, res) => {
  res.render('index')
})

app.post('/', (req, res) => {
  const options = req.body
  const password = generatePassword(options)
  res.render('index', { password, options })
})

// Listening server on localhost:3000
app.listen(port, () => {
  console.log(`Express server is running on http://localhost:${port}`)
})