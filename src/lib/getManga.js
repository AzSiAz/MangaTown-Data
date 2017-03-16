import { getMangaPage } from './fetch'
import getChapters from '../parser/MangaPage/getChapters'
import getMetadata from '../parser/MangaPage/getMetadata'

const getManga = (title) => new Promise((resolve, reject) => {
    getMangaPage(title)
        .then($ => {
            let data = getMetadata($)
            data.chapters = getChapters($, data.title)
            resolve(data)
        })
        .catch(err => reject(err))
})

export default getManga
