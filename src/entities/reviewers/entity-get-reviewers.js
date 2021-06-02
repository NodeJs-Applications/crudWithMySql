const entityGetReviewers = (req , db) => new Promise( async (resolve , reject) => {
    try {
        const result = await db.getReviewers();
        resolve(result);
    } catch (error) {
        reject(error);
    }
}) 

module.exports = entityGetReviewers