const convertTitle = require('../convertTitle')

/**
 * @typedef Chapter
 * @property {number} chapter
 * @property {string} url
 * @property {string} seriesTitle
 * 
 * @typedef {Chapter[]} Chapters
 * 
 * @exports Chapters
 * 
 * 
 * @param {CheerioStatic} $
 * @param {string} title
 * @returns {Chapter[]}
 */
module.exports = ($, title) => {
    if (!title) throw new Error('No title passed')
    return $('.chapter_list li a').map(function(i, e) {
        let parsedTitle = convertTitle(title)
        let chapter = parseFloat($(e).text().trim().replace(title, ''))
        return {
            chapter: chapter,
            url: $(e).attr('href'),
            seriesTitle: parsedTitle
        };
    }).get()
}