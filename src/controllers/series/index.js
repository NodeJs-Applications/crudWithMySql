const express = require('express');

const seriesRourer = express();

const getSeries = require('./ui-controller-get-series');
const createSeries = require('./ui-controller-create-series');

seriesRourer.use('/series' , getSeries);
seriesRourer.use('/series' , createSeries);

module.exports = seriesRourer;