const { getMangaChapterPage } = require('./fetch')
const getUrlList = require('../parser/Reader/getUrlList')


/**
 * @param {string} url 
 * @returns {Promise<import('./../parser/Reader/getUrlList').UrlList[]>}
 */
module.exports = (url) => {
    return getMangaChapterPage(url)
        .then($ => getUrlList($))
}