/**
 * @typedef Pagination
 * @property {string} currentPage
 * @property {string} maxPage
 * 
 * @exports Pagination
 * 
 * 
 * Return parsed pagination from page
 * @param {CheerioStatic} $
 * @returns {Pagination}
 */
module.exports = ($) => {
    let page = $('.next-page select').children('[selected]').text().trim().split('/')

    return {
        currentPage: page[0],
        maxPage: page[1]
    }
}
