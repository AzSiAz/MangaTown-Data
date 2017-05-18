import { getPageMangaList } from './fetch'
import getMangaList from '../parser/General/getMangaList'

const getList = (page = 1) => new Promise((resolve, reject) => {
    getPageMangaList(`http://www.mangatown.com/directory/0-0-0-0-0-0/${page}.htm?name.az`)
        .then($ => getMangaList($))
        .then(data => resolve(data))
        .catch(err => reject(err))
})

export default getList