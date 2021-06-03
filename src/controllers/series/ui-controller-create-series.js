const express = require('express');
const Series = require('./db-controller-series');

const router = express.Router();

const useCaseCreateSeries = require('../../usecases/series/useCase-create-series');

router.post('/' , async (req , res) => {
    try {
        const result = await useCaseCreateSeries( Series , req.body);
        res.send(result);
    } catch (error) {
        res.send(error);
    }
})

module.exports = router;