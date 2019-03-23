const searchManga = require('./lib/searchManga')
const getChapter = require('./lib/getChapter')
const getManga = require('./lib/getManga')
const getLatest = require('./lib/getLatest')
const getHot = require('./lib/getHot')
const getList = require('./lib/getList')
const getImageUrl = require('./lib/getImageUrl')
const { getPage } = require('./lib/fetch')

module.exports = {
    searchManga,
    getChapter,
    getManga,
    getPage,
    getLatest,
    getHot,
    getImageUrl,
    getList
}

// getList().then(console.log)