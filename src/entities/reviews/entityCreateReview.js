const entityCreateReview = (db , data) => new Promise(async (resolve , reject) => {
    try {
        const result = await db.createReview(data);
        resolve(result);
    } catch (error) {
        reject(error);
    }
})

module.exports = entityCreateReview;