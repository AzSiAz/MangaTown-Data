import { searchManga as search } from './fetch'
import getMangaList from '../parser/General/getMangaList'

const searchManga = (title, page = 1) => new Promise((resolve, reject) => {
    search(title, page)
        .then($ => getMangaList($))
        .then(data => resolve(data))
        .catch(err => reject(err))
})

export default searchManga