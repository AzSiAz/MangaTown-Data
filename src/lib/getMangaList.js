import { getPageMangaList } from './fetch'
import getMangaDirList from '../parser/General/getMangaList'

const getMangaList = (page = 1) => new Promise((resolve, reject) => {
    getPageMangaList(`http://www.mangatown.com/directory/0-0-0-0-0-0/${page}.htm?name.az`)
        .then($ => getMangaDirList($))
        .then(data => resolve(data))
        .catch(err => reject(err))
})

export default getMangaList