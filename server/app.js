require('dotenv').config()

const express = require('express')
const app = express()
const cors = require('cors')

app.use(cors({
  origin: '*',
  credentials: true
}))

const mainRoutes = require('./routes/index')
app.use('/', mainRoutes)

app.listen(process.env.PORT, () => {
  console.log('GitHub app listening on port ' + process.env.PORT)
})

module.exports = app
