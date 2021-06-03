const entityGetReviews = (db ) => new Promise(async (resolve , reject) => {
    try {
        const result = await db.getReviews();
        resolve(result);
    } catch (error) {
        reject(error);
    }
})

module.exports = entityGetReviews;