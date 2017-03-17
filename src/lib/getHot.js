import { getPage } from './fetch'
import getMangaList from '../parser/General/getMangaList'

const getHot = (page = 1) => new Promise((resolve, reject) => {
    getPage(page, 'http://www.mangatown.com/hot')
        .then($ => getMangaList($))
        .then(data => resolve(data))
        .catch(err => reject(err))
})

export default getHot