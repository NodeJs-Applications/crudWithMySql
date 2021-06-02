const express = require('express');

const useCaseGetReviewers = require('../../usecases/reviewers/usecase-get-reviewers');
const reviewers = require('./db-controller-reviewer');



const router = express.Router();


router.get('/',async (req , res) => {

    try {
        const result = await useCaseGetReviewers(req , reviewers);
        res.send(result);
    } catch (error) {
        res.send(error);
    }

})

module.exports = router;