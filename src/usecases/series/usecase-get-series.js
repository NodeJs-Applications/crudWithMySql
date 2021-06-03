const entityGetSeries = require('../../entities/series/entity-get-series');

const useCaseGetSeries =  (db) => new Promise( async (resolve , reject) => {
    try {
        const result = await entityGetSeries(db);
        resolve(result);
    } catch (error) {
        reject(error);
    }
}) 

module.exports = useCaseGetSeries;