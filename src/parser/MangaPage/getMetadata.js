const getTitle = require('./getSeriesTitle')
const getBasicArrayData = require('./getBasicArrayData')
const getCover = require('./getCover')

/**
 * @typedef Metadata
 * @property {string} title
 * @property {string} cover
 * @property {string[]} alternateName
 * @property {string} status
 * @property {string} rank
 * @property {string} summary
 * @property {import('./getBasicArrayData').BasicData[]} demographic
 * @property {import('./getBasicArrayData').BasicData[]} genre
 * @property {import('./getBasicArrayData').BasicData[]} author
 * @property {import('./getBasicArrayData').BasicData[]} artist
 * @property {import('./getBasicArrayData').BasicData[]} type
 * 
 * 
 * @param {CheerioStatic} $ 
 * @returns {Metadata}
 */
module.exports = ($) => {
    /** @type {Metadata} metadata */
    let metadata = {}
    metadata.title = getTitle($)
    metadata.cover = getCover($)
    $('.detail_info.clearfix ul > li').map((index, element) => {
        let el = $(element)
        let swichText = el.children().first().text().trim()

        switch(swichText) {
            case 'Alternative Name:':
                metadata.alternateName = el.text().trim()
                    .replace(swichText, '').split(';').map(val => val.trim())
                break
            case 'Demographic:':
                metadata.demographic = getBasicArrayData(element, $)
                break
            case 'Genre(s):':
                metadata.genre = getBasicArrayData(element, $)
                break
            case 'Author(s):':
                metadata.author = getBasicArrayData(element, $)
                break
            case 'Artist(s):':
                metadata.artist = getBasicArrayData(element, $)
                break
            case 'Status(s):':
                metadata.status = el.text().trim()
                    .replace(swichText, '')
                break
            case 'Rank:':
                metadata.rank = el.text().trim()
                    .replace(swichText, '')
                break
            case 'Type:':
                metadata.type = getBasicArrayData(element, $)
                break
            case 'Summary:':
                metadata.summary = el.children('#show').text()
                    .trim().slice(0, -4).trim()
                break;
            case 'Bookmark':
            case 'Advertisement':
            case '':
                // console.log('nope')
                break;
            default:
                // console.log('number')
        }
        // console.log('-----------')
    })

    return metadata;
}
