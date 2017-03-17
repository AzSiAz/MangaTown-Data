import { getMangaChapterPage } from './fetch'
import getUrl from '../parser/Reader/getImageUrl'

const getImageUrl = (url) => new Promise((resolve, reject) => {
    getMangaChapterPage(url)
        .then($ => getUrl($))
        .then(url => resolve({imageUrl: url}))
        .catch(err => reject(err))
})

export default getImageUrl