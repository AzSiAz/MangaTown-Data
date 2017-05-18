import bluebird from 'bluebird'
global.Promise = bluebird

import searchManga from './lib/searchManga'
import getChapter from './lib/getChapter'
import getManga from './lib/getManga'
import getLatest from './lib/getLatest'
import getHot from './lib/getHot'
import getMangaList from './lib/getMangaList'
import getImageUrl from './lib/getImageUrl'
import getPage from './lib/fetch'

export { searchManga, getChapter, getManga, getPage, getLatest, getHot, getImageUrl, getMangaList }

// getMangaList().then(console.log)