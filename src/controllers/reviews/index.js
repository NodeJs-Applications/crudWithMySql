const express = require('express');

const reviewRouter = express();

const getReviews = require('./ui-controller-get-review');
const createReview = require('./ui-controller-create-review');

reviewRouter.use('/reviews' , getReviews);
reviewRouter.use('/review' , createReview);

module.exports = reviewRouter;