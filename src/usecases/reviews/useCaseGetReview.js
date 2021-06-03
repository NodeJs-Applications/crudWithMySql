const entityGetReviews = require('../../entities/reviews/entityGetReviews');

const useCaseGetReviews = (db) => new Promise(async (resolve , reject)=>{
    try {
        const result = await entityGetReviews(db);
        resolve(result);
    } catch (error) {
        reject(error)
    }
}) 

module.exports = useCaseGetReviews;