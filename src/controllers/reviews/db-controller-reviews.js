const Reviews = require('../../models/reviews/reviews');
const Reviewers = require('../../models/reviewers/reviewers');
const Series = require('../../models/series/series');

const createReview = (data) => new Promise (async (resolve , reject) => {
    try {
        const insertData = {
            rating : data.rating,
            ReviewerId : data.reviewerId,
            SeriesId : data.seriesId
        }
        const result = await Reviews.create(insertData);
        resolve(result)
    } catch (error) {
        reject(error);
    }
})

const getReviews = () => new Promise( async (resolve , reject)=>{
    try {
        const result = await Reviews.findAll({
            include: [ Reviewers , Series ]            
        });
        resolve(result);
    } catch (error) {
        reject(error);
    }
})

module.exports = {
    createReview,
    getReviews
}