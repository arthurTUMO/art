const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const history = require('connect-history-api-fallback')
const serveStatic = require('serve-static')
const path = require('path')

// eslint-disable-next-line semi
const app = express();
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())
app.use(cors())
app.use(serveStatic(path.join(__dirname, '..', '/dist')))
// Inserted this so that client-side routing works
app.use(history({
  verbose: true
}))
// Documentation for connect-history-api-fallback requires this again...
app.use(serveStatic(path.join(__dirname, '..', '/dist')))

app.get('/endpoint', (req, res) => {
  res.send('hello')
})

app.post('/', (req, res) => {
  console.log(req.body)
  res.status(200).send(req.body)
})

app.post('/register', (req, res) => {
  console.log(req.body)
  res.status(200).send(req.body)
})

app.get('/studentList', (req, res) => {
  console.log('reached endpoint')
  let response = {
    studentList: [{ first: 'Arman', last: 'Gasparyan' },
      { first: 'Harutyun', last: 'Terteryan' },
      { first: 'Harutyun', last: 'Sargsyan' }]
  }
  res.status(200)
  res.json(response)
})

let port = process.env.PORT || 4000

app.listen(port, function () {
  console.log('Node js at port', port)
})
