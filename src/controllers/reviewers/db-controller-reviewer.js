const Reviewers = require('../../models/reviewers/reviewers');
const Reviews = require('../../models/reviews/reviews');

const getReviewers = () => new Promise(async (resolve , reject) => {
    {
        try {
            const result = Reviewers.findAll({
                include : Reviews
            });
            resolve(result);
        } catch (error) {
            reject(error);
        }
    }
}) 

const createReviewer = (data) => new Promise((resolve , reject) => {
    console.log(data , 'Data')
    const reviewerData = {
        first_name : data.firstName,
        last_name : data.lastName
    }
    try {
        const result = Reviewers.create(reviewerData);
        resolve(result);
    } catch (error) {
        reject(error);
    }
})

module.exports = {
    getReviewers,
    createReviewer
}