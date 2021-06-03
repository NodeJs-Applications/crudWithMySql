const entityGetSeries =  (db) => new Promise( async (resolve , reject) => {
    try {
        const result = await db.getSeries();
        resolve(result);
    } catch (error) {
        reject(error);
    }
}) 

module.exports = entityGetSeries;