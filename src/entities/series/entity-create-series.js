const entityCreateSeries = (db , data) => new Promise(async  (resolve , reject) => {
    try {
        const result = await db.createSeries(data);
        resolve(result);
    } catch (error) {
        reject(error);
    }
})

module.exports = entityCreateSeries;