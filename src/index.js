import bluebird from 'bluebird'
global.Promise = bluebird

import searchManga from './lib/searchManga'
import getChapter from './lib/getChapter'
import getManga from './lib/getManga'

export { searchManga, getChapter, getManga }
// import getManga from './lib/getManga'

// getManga('the gamer').then(console.log)