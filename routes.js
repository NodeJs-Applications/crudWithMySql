const express = require('express');
const reviewersRouter = require('./src/controllers/reviewers');
const seriesRourer = require('./src/controllers/series');
const reviewsRouter = require('./src/controllers/reviews');

const router = express();

router.use(seriesRourer);
router.use(reviewersRouter);
router.use(reviewsRouter);



module.exports = router;