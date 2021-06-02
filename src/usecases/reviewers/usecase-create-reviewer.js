const entityCreateReviwer = require('../../entities/reviewers/entity-create-reviewer');

const useCaseCreateReviewer = (db , data) => new Promise( async (resolve , reject) => {

    try {
        console.log(data , 'Data')
        const result = await entityCreateReviwer(db , data);
        resolve(result);
    } catch (error) {
        reject(error);
    }
})

module.exports = useCaseCreateReviewer;