import bluebird from 'bluebird'
global.Promise = bluebird

// import { getMangaPage } from './fetch'
// import getMetadata from './parser/MangaPage/getMetadata'
// import getChapters from './parser/MangaPage/getChapters'

// getMangaPage('the gamer').then($ => {
//     let metadata = getMetadata($)
//     let chapters = getChapters($, metadata.title)
//     console.log('Metadata')
//     console.log(metadata)
//     console.log('')
//     console.log('----------')
//     console.log('')
//     console.log('Chapter')
//     console.log(chapters.length)
// }).catch(console.dir)
