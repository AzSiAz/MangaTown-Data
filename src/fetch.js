import fetch from 'isomorphic-fetch'
import cheerio from 'cheerio'

import nameToUrl from './nameToUrl'

const getMangaPage = async (series) => {
    series = nameToUrl(series)
    let res = await fetch(`${series}`)
    if (res.status >= 400) {
        throw new Error("Bad response from server");
    }
    let text = await res.text()
    return cheerio.load(text)
}

export { getMangaPage }