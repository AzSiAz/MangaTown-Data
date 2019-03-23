/**
 * Get image url from viewer
 * @param {CheerioStatic} $
 * @returns {string}
 */
module.exports = ($) => {
    return $('#viewer img').first().attr('src');
}
