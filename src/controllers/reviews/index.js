const express = require('express');

const reviewRouter = express();

const getReview = require('./ui-controller-get-review');

reviewRouter.use('/review' , getReview);

module.exports = reviewRouter;