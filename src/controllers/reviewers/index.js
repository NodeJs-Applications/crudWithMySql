const express = require('express');

const reviewersRouter = express();

const getReviewers = require('./ui-controller-get-reviewers');
const createReviewer = require('./ui-controller-create-reviewer');

reviewersRouter.use('/reviewer', getReviewers);
reviewersRouter.use('/reviewer', createReviewer);

module.exports = reviewersRouter;