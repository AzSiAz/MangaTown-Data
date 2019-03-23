const { getMangaPage } = require('./fetch')
const getChapters = require('../parser/MangaPage/getChapters')
const getMetadata = require('../parser/MangaPage/getMetadata')


/**
 * @typedef {import('./../parser/MangaPage/getMetadata').Metadata} Meta
 * 
 * @typedef ChapterList
 * @property {import('./../parser/MangaPage/getChapters').Chapters} chapters
 * 
 * @typedef {Meta & ChapterList} Manga
 *
 * @param {string} title
 * @returns {Promise<Manga>}
 */
module.exports = async (title) => {
    const $ = await getMangaPage(title)

    const metadata = getMetadata($)

    return {
        chapters: getChapters($, metadata.title),
        ...metadata
    }
}
