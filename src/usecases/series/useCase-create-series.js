const entityCreateSeries = require('../../entities/series/entity-create-series');


const useCaseCreateSeries = (db , data) => new Promise( async (resolve , reject) => {
    try {
        const result = await entityCreateSeries(db , data);
        resolve(result);
    } catch (error) {
        reject(error);
    }
})

module.exports = useCaseCreateSeries;