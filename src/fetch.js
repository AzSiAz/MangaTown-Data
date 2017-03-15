import fetch from 'isomorphic-fetch'
import cheerio from 'cheerio'

import nameToUrl from './nameToUrl'

const sleep = (time) => new Promise((resolve) => {
    setTimeout(() => {
        resolve()
    }, time)
})

const getMangaPage = async (series) => {
    series = nameToUrl(series)
    if (process.env.NODE_ENV === 'test') await sleep(150)
    let res = await fetch(`${series}`)
    if (res.status >= 400) {
        throw new Error("Bad response from server");
    }
    let text = await res.text()
    return cheerio.load(text)
}

export { getMangaPage }