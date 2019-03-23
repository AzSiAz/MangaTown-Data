/**
 * @typedef BasicData
 * @property {string} name
 * @property {string} link
 *
 * @exports BasicData
 * 
 * @param {CheerioElement} element 
 * @param {CheerioStatic} $ 
 * @returns {BasicData[]}
 */
module.exports = (element, $) => {
    /** @type {{name: string, link: string}[]} */
    let data = []
    $(element).children('a').each((i, el) => {
        let el2 = $(el)
        data.push({
            name: el2.text().trim(),
            link: el2.attr('href')
        })
    })
    
    return data
}
