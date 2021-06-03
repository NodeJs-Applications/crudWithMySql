const entityCreateReview = require('../../entities/reviews/entityCreateReview');

const useCaseCreateReview = (db , data) => new Promise(async (resolve , reject)=>{
    try {
        const result = await entityCreateReview(db , data);
        resolve(result);
    } catch (error) {
        reject(error)
    }
}) 

module.exports = useCaseCreateReview;