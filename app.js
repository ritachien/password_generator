// Required modules and server related variables
const express = require('express')
const exphbs = require('express-handlebars')
const app = express()
const port = 3000

// Set express engine
app.engine('handlebars', exphbs({ defaultLayout: 'main' }))
app.set('view engine', 'handlebars')


// Route settings
app.get('/', (req, res) => {
  res.render('index')
})

// Listening server on localhost:3000
app.listen(port, () => {
  console.log(`Express server is running on http://localhost:${port}`)
})