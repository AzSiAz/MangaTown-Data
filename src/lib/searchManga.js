const { searchManga } = require('./fetch')
const getMangaList = require('../parser/General/getMangaList')

/**
 * 
 * @param {string} title 
 * @param {number} [page=1] 
 * @returns {Promise<import('./../parser/General/getMangaList').MangaList>}
 */
module.exports = async (title, page = 1) => {
    const $ = await searchManga(title, page)

    return getMangaList($)
}