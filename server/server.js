const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const history = require('connect-history-api-fallback')
const serveStatic = require('serve-static')
const path = require('path')
const pool = require('./database.js')

//CITATION: https://stackoverflow.com/questions/40876599/express-js-force-https-ssl-redirect-error-too-many-redirects
//HTTPS redirect middleware
function ensureSecure(req, res, next) {
  //Heroku stores the origin protocol in a header variable. The app itself is isolated within the dyno and all request objects have an HTTP protocol.
  if (req.get('X-Forwarded-Proto')=='https' || req.hostname == 'localhost') {
    //Serve Vue App by passing control to the next middleware
    next();
  } else if(req.get('X-Forwarded-Proto')!='https' && req.get('X-Forwarded-Port')!='443'){
    //Redirect if not HTTP with original request URL
    res.redirect('https://' + req.hostname + req.url);
  }
}

// eslint-disable-next-line semi
const app = express();
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())
app.use(cors())
app.all('*', ensureSecure)
app.use(serveStatic(path.join(__dirname, '..', '/dist')))
// Inserted this so that client-side routing works
app.use(history({
  verbose: true
}))
// Documentation for connect-history-api-fallback requires this again...
app.use(serveStatic(path.join(__dirname, '..', '/dist')))

// function for errors on database connections
function dbConnError(res, err) {
  console.error('Error acquiring client', err, err.message, err.stack);
  res.status(400);
  res.send(err);
}

// function for query errors
function queryError(res, err) {
  console.log('Query error', err, err.message, err.stack);
  res.status(400);
  res.send(err);
}

app.get('/getArt', (req, res) => {
  pool.connect(function (err, client, done) {
    if (err) {
      dbConnError(res, err);
      return;
    }
    client.query('SELECT * FROM art', //do the query
      (err, resp) => {
        if (err) {
          queryError(res, err)
          return;
        }
        if (req.timedout) return
        console.log(resp.rows)
        // Successful get request
        let response = {
          cards: resp.rows
        }
        res.status(200)
        res.json(response)
      });
      client.release()
  })
})

app.get('/getInfo', (req, res) => {
  let id = req.query['id']
  pool.connect(function (err, client, done) {
    if (err) {
      dbConnError(res, err);
      return;
    }
    client.query(`SELECT * FROM art WHERE id=${id};`, //do the query
      (err, resp) => {
        if (err) {
          queryError(res, err)
          return;
        }
        if (req.timedout) return
        console.log(resp.rows)
        // Successful get request
        let response = {
          info: resp.rows[0]
        }
        res.status(200)
        res.json(response)
      });
      client.release()
  })
})

app.post('/postArt', async (req, res) => {
  let title = req.body.title
  let description = req.body.description
  let images = req.body.images
  let insertImages = '{'
  let i = 0
  for(i; i < images.length-1; i++) {
    insertImages += '"' + images[i] + '", '
  }
  insertImages += '"' + images[i] + '"}'

  let query = `INSERT INTO art(title, description, images) VALUES ('${title}', '${description}', '${insertImages}') RETURNING id;`
  console.log(query)

  //connect to the db
  pool.connect(function (err, client, done) {
    if (err) {
      dbConnError(res, err);
      return;
    }
    client.query(query, //do the query
      (err, resp) => {
        if (err) {
          queryError(res, err);
          return;
        }

        res.status(200)
        res.json(resp.rows[0].id)
      });
      client.release()
  });
});

let port = process.env.PORT || 4000

app.listen(port, function () {
  console.log('Node js at port', port)
})
