const express = require('express');

const seriesRourer = express();

const getSeries = require('./ui-controller-get-series');

seriesRourer.use('/series' , getSeries);

module.exports = seriesRourer;