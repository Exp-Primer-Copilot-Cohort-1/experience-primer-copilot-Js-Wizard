// Create web server
// 1. Create a web server
// 2. Create a router
// 3. Create a request handler
// 4. Create a response handler
// 5. Listen to a port

const http = require('http');
const url = require('url');
const queryString = require('querystring');
const fs = require('fs');

// Create a web server
const server = http.createServer();

// Create a router
const router = {
  '/comments': (req, res) => {
    if (req.method === 'GET') {
      // Create a response handler
      res.writeHead(200, { 'Content-Type': 'application/json' });
      res.end(fs.readFileSync('./