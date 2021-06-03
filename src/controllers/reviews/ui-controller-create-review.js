const express = require('express');

const Reviews = require('./db-controller-reviews');
const useCaseCreateReview = require('../../usecases/reviews/useCaseCreateReview');

const router = express.Router();

router.post('/' , async (req , res) => {
    try {
        const result = await useCaseCreateReview(Reviews , req.body);
        res.send(result);
    } catch (error) {
        res.send(error);
    }
})

module.exports = router;
