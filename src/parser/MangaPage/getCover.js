/**
 * @param {CheerioStatic} $ 
 * @returns {string}
 */
module.exports = ($) => {
    return $('.detail_info.clearfix').children('img').attr('src').trim()
}
