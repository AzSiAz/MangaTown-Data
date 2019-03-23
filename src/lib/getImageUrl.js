const { getMangaChapterPage } = require('./fetch')
const getImageFromUrl = require('../parser/Reader/getImageUrl')

/**
 * Get direct image url from a reader? page
 * @param {string} url 
 * @returns {Promise<{imageUrl: string}>}
 */
module.exports = async (url) => {
    const $ = await getMangaChapterPage(url)
    url = await getImageFromUrl($)

    return {
        imageUrl: url,
    }
}