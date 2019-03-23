// @ts-check
const parseDate = require('./parseDate')
const paginationParser = require('./paginationParser')

/**
 * @typedef SmallManga
 * @property {string} title
 * @property {string} url
 * @property {string} cover
 * @property {string} date
 * @property {number} chapter
 * @exports SmallManga
 * 
 * @typedef MangaList
 * @property {SmallManga[]} data
 * @property {import('./paginationParser').Pagination} page
 * @exports MangaList
 * 
 * Get list of manga from page where there is multiple manga like latest page
 * @param {CheerioStatic} $
 * @returns {MangaList}
 */
module.exports = ($) => {
    return {
        page: paginationParser($),
        data: $('.main .manga_pic_list li')
            .map((_, element) => {
                let el = $(element)
                let title = el.children('.title').children()
                    .first().attr('title')
                let chapter = parseFloat(el.children('.new_chapter')
                    .children('a').attr('title').replace(title, ''))
                return {
                    title: title,
                    url: el.children('.title').children().first().attr('href'),
                    cover: el.children('.manga_cover').children('img').attr('src'),
                    chapter: chapter,
                    date: parseDate(el.children().last().text().trim())
                }
            })
            .get()
    }
}
