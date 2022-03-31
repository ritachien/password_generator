// Required modules and server related variables
const express = require('express')
const exphbs = require('express-handlebars')
const app = express()
const port = 3000

// Route settings
app.get('/', (req, res) => {
  res.send('This will be replaced by handlebars render file.')
})

// Listening server on localhost:3000
app.listen(port, () => {
  console.log(`Express server is running on http://localhost:${port}`)
})