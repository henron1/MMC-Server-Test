const express = require('express');
const morgan = require('morgan');
const server = express();
const db = require('../data/dbConfig');
const users = require("../api/locationModel");

server.use(morgan('dev'));

server.use(express.json());
server.get('/', (req, res) => {
    res.send('<h1>Sanity Check! This is working!</h1>');
  });

server.get('/locations', async (req, res) => {
    const response = await users.getLocations(req.query);
    try {
      res.json(response);
    } catch (err) {
      res.json(err);
      console.log(err)
    }
  });
module.exports = server;