const express = require('express');
const port = process.env.PORT || 5500;
const app = express().use(express.static(`${__dirname}/public`)).listen(port);
