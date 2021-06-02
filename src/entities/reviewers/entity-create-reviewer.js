const entityCreateReviwer = (db , data) => new Promise( async (resolve , reject) => {
    try {
        console.log(data , 'Data')
        const result = await db.createReviewer(data);
        resolve(result);
    } catch (error) {
        reject(error)
    }
})

module.exports = entityCreateReviwer;