const express = require('express');

const Reviewer = require('./db-controller-reviewer');
const useCaseCreateReviewer = require('../../usecases/reviewers/usecase-create-reviewer');

const router = express.Router();

router.post('/' , async (req , res) => {
    try {
        console.log(req , 'req');
        const result = await useCaseCreateReviewer( Reviewer , req.body);
        res.send(result);
    } catch (error) {
        res.send(error)
    }

})

module.exports = router;

