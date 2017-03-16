import { getMangaChapterPage } from './fetch'
import getUrlList from '../parser/Reader/getUrlList'

const getChapter = (url) => new Promise((resolve, reject) => {
    getMangaChapterPage(url)
        .then($ => getUrlList($))
        .then(data => resolve(data))
        .catch(err => reject(err))
})

export default getChapter