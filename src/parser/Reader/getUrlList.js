/**
 * @typedef UrlList
 * @property {number} index
 * @property {number} number
 * @property {string} url
 * 
 * @exports UrlList
 * 
 * Return a list of chapter page from reader page
 * @param {CheerioStatic} $
 * @returns {UrlList[]}
 */
module.exports = ($) => {
    return $('.main .page_select')
        .first()
        .find('select option')
        .map(function(i, e) {
            return {
                index: i,
                number: $(e).text(),
                url: $(e).val()
            };
        })
        .get();
}
