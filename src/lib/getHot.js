const { getPage } = require('./fetch')
const getMangaList = require('../parser/General/getMangaList')


/**
 * @param {number} [page=1]
 * @returns {Promise<import('./../parser/General/getMangaList').MangaList>}
 */
module.exports = async (page = 1) => {
    const $ = await getPage(page, 'http://www.mangatown.com/hot');
    return getMangaList($);
}