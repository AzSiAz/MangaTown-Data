const { getPageMangaList } = require('./fetch')
const getMangaList = require('../parser/General/getMangaList')

/**
 * @param {number} [page=1] 
 * @returns {Promise<import('./../parser/General/getMangaList').MangaList>}
 */
module.exports = async (page = 1) => {
    const $ = await getPageMangaList(`http://www.mangatown.com/directory/0-0-0-0-0-0/${page}.htm?name.az`)

    return getMangaList($)
}