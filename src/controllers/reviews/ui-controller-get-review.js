const express = require('express');

const Reviews = require('./db-controller-reviews');
const useCaseGetReviews = require('../../usecases/reviews/useCaseGetReview');

const router = express.Router();

router.get('/' , async (req , res) => {
    try {
        const result = await useCaseGetReviews(Reviews);
        res.send(result);
    } catch (error) {
        res.send(error);
    }
})

module.exports = router;
