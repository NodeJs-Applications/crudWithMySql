const entityGetReviewers = require('../../entities/reviewers/entity-get-reviewers');

const useCaseGetReviewers = (req ,db) => new Promise(async (resolve , reject)=>{
    try {
        const result = await entityGetReviewers(req ,db);
        resolve(result)
    } catch (error) {
        reject(error)
    }
});

module.exports = useCaseGetReviewers;