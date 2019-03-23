const { getPage } = require('../../../src/lib/fetch')
const getMangaList = require('../../../src/parser/General/getMangaList')


describe('getMangaList Test', () => {
    test('Should return manga list from page', async () => {
        let $ = await getPage()
        let { data } = getMangaList($)
        expect(data).not.toBeUndefined()
        expect(typeof data).toBe('object')
        expect(data[0]).toHaveProperty('title')
        expect(data[0]).toHaveProperty('url')
        expect(data[0]).toHaveProperty('cover')
        expect(data[0]).toHaveProperty('chapter')
        expect(data[0]).toHaveProperty('date')
    })
})
// { title: 'Choujin Koukousei-tachi wa Isekai demo Yoyuu de Ikinuku you desu!',
//     url: 'http://www.mangatown.com/manga/choujin_koukousei_tachi_wa_isekai_demo_yoyuu_de_ikinuku_you_desu/',
//     cover: 'http://h.mangatown.com/store/manga/25329/ocover.jpg?token=e3a618871cd1b876ded4c32285e948ab&ttl=1489701600',
//     chapter: 7,
//     date: 'Dec 29, 2016 1:17am' }