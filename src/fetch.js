import fetch from 'isomorphic-fetch'
import cheerio from 'cheerio'

import nameToUrl from './parser/nameToUrl'

const sleep = (time) => new Promise((resolve) => {
    setTimeout(() => {
        resolve()
    }, time)
})

const getMangaPage = async (series) => {
    series = nameToUrl(series)
    await sleep(150)
    let res = await fetch(`${series}`)
    if (res.status >= 400) {
        throw new Error("Bad response from server");
    }
    let text = await res.text()
    return cheerio.load(text)
}

const getMangaChapterPage = async (url) => {
    await sleep(150)
    let res = await fetch(url)
    if (res.status >= 400) {
        throw new Error("Bad response from server");
    }
    let text = await res.text()
    return cheerio.load(text)
}


const getPage = async (page = 1, addr = 'http://www.mangatown.com/latest') => {
    await sleep(150)
    const url = `${addr}/${page}.htm`
    let res = await fetch(url)
    if (res.status >= 400) {
        throw new Error("Bad response from server");
    }
    let text = await res.text()
    return cheerio.load(text)
}

const searchManga = async (title, page = 1) => {
    await sleep(150)
    const url = `http://www.mangatown.com/search.php?name=${title}&page=${page}`
    let res = await fetch(url)
    if (res.status >= 400) {
        throw new Error("Bad response from server");
    }
    let text = await res.text()
    return cheerio.load(text)
}

export { getMangaPage, getMangaChapterPage, getPage, searchManga }