import getTitle from './getSeriesTitle'
import getBasicArrayData from './getBasicArrayData'
import getCover from './getCover'

const getMetadata = ($) => {
    let metadata = {}
    metadata.title = getTitle($)
    metadata.cover = getCover($)
    $('.detail_info.clearfix ul > li').map((index, element) => {
        let swichText = $(element).children().first().text().trim()
        element = $(element)
        // console.log(swichText)
        switch(swichText) {
            case 'Alternative Name:':
                metadata.alternateName = element.text().trim()
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
                metadata.status = element.text().trim()
                    .replace(swichText, '')
                break
            case 'Rank:':
                metadata.rank = element.text().trim()
                    .replace(swichText, '')
                break
            case 'Type:':
                metadata.type = getBasicArrayData(element, $)
                break
            case 'Summary:':
                metadata.summary = element.children('#show').text()
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

export default getMetadata