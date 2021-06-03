const Series =  require('../../models/series/series');


const getSeries = () => new Promise(async (resolve , reject) => {
    try {
        const result = await Series.findAll();
        resolve(result)
    } catch (error) {
        reject(error)
    }
})

const createSeries = (data) => new Promise( async (resolve , reject) => {
    try {
        const insertData = {
            title : data.title,
            released_year : data.releasedYear,
            genre : data.genre
        }
        const result = await Series.create(insertData);
        resolve(result.toJSON())
    } catch (error) {
        reject(error)
    }
})

module.exports = {
    getSeries,
    createSeries
}