const express = require('express');

const Series = require('./db-controller-series');
const useCaseGetSeries = require('../../usecases/series/usecase-get-series')

const router = express.Router();

router.get('/' ,async (req , res) =>{
try {
    const result = await useCaseGetSeries(Series);
    res.send(result);
} catch (error) {
    res.send(error);
}
})

module.exports = router;