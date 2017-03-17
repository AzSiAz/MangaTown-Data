import { getPage } from './fetch'
import getMangaList from '../parser/General/getMangaList'

const getLatest = (page = 1) => new Promise((resolve, reject) => {
    getPage(page, 'http://www.mangatown.com/latest')
        .then($ => getMangaList($))
        .then(data => resolve(data))
        .catch(err => reject(err))
})

export default getLatest