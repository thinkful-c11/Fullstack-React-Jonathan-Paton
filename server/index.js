'use strict';

const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');
const app = express();

// API endpoints go here!


// Serve the built client
app.use(express.static(path.resolve(__dirname, '../client/build')));
app.use(bodyParser.json());
// Unhandled requests which aren't for the API should serve index.html so
// client-side routing using browserHistory can function
app.get(/^(?!\/api(\/|$))/, (req, res) => {
  const index = path.resolve(__dirname, '../client/build', 'index.html');
  res.sendFile(index);
});

const cheeses = [
  'Bath Blue',
  'Barkham Blue',
  'Buxton Blue',
  'Cheshire Blue',
  'Devon Blue',
  'Dorset Blue Vinney',
  'Dovedale',
  'Exmoor Blue',
  'Harbourne Blue',
  'Lanark Blue',
  'Lymeswold',
  'Oxford Blue',
  'Shropshire Blue',
  'Stichelton',
  'Stilton',
  'Blue Wensleydale',
  'Yorkshire Blue'
];

app.get('/api/cheeses', (req, res) => {
  return res.json(cheeses);
});

app.post('/api/cheeses', (req, res) => {
  cheeses.push(req.body.cheese);
  return res.status(201).json(cheeses);
  //hello
});

let server;
function runServer(port=3001) {
  return new Promise((resolve, reject) => {
    server = app.listen(port, () => {
      resolve();
    }).on('error', reject);
  });
}

function closeServer() {
  return new Promise((resolve, reject) => {
    server.close(err => {
      if (err) {
        return reject(err);
      }
      resolve();
    });
  });
}

if (require.main === module) {
  runServer();
}

module.exports = {
  app, runServer, closeServer
};
