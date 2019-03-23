const fetch = require('isomorphic-fetch')
const cheerio = require('cheerio')

const nameToUrl = require('../parser/nameToUrl')


/**
 * Sleep from X ms
 * @param {number} time
 * @returns {Promise<void>}
 */
const sleep = (time) => new Promise((resolve) => {
    setTimeout(() => {
        resolve()
    }, time)
})

/**
 * 
 * @param {string} seriesName
 * @returns {Promise<CheerioStatic>}
 */
const getMangaPage = async (seriesName) => {
    let name = nameToUrl(seriesName)
    await sleep(250)
    let res = await fetch(`${name}`)
    if (res.status >= 400) {
        throw new Error("Bad response from server");
    }
    let text = await res.text()
    return cheerio.load(text)
}

/**
 * Download chapter page & return parsed html
 * @param {string} url
 * @returns {Promise<CheerioStatic>}
 */
const getMangaChapterPage = async (url) => {
    await sleep(250)
    let res = await fetch(url)
    if (res.status >= 400) {
        throw new Error("Bad response from server");
    }
    let text = await res.text()
    return cheerio.load(text)
}


/**
 * Returne parsed html after download from specified page 
 * @param {number} [page=1]
 * @param {string} [addr="http://www.mangatown.com/latest"]
 * @returns {Promise<CheerioStatic>}
 */
const getPage = async (page = 1, addr = 'http://www.mangatown.com/latest') => {
    await sleep(250)
    const url = `${addr}/${page}.htm`
    let res = await fetch(url)
    if (res.status >= 400) {
        throw new Error("Bad response from server");
    }
    let text = await res.text()
    return cheerio.load(text)
}

/**
 * return parsed html of manga page list
 * @param {string} url 
 * @returns {Promise<CheerioStatic>}
 */
const getPageMangaList = async (url) => {
    await sleep(250)
    let res = await fetch(url)
    if (res.status >= 400) {
        throw new Error("Bad response from server");
    }
    let text = await res.text()
    return cheerio.load(text)
}

/**
 * Return search result with manga title & page 
 * @param {string} title 
 * @param {number} [page=1]
 * @returns {Promise<CheerioStatic>}
 */
const searchManga = async (title, page = 1) => {
    await sleep(250)
    const url = `http://www.mangatown.com/search.php?name=${title}&page=${page}`
    let res = await fetch(url)
    if (res.status >= 400) {
        throw new Error("Bad response from server");
    }
    let text = await res.text()
    return cheerio.load(text)
}

module.exports = {
    getMangaPage,
    getMangaChapterPage,
    getPage,
    searchManga,
    getPageMangaList
}