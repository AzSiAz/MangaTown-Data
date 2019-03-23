const { getMangaPage } = require('../../../src/lib/fetch')
const getCover = require('../../../src/parser/MangaPage/getCover')


describe('getCover Test', () => {
    test('Should return cover', async () => {
        let $ = await getMangaPage('the_gamer')
        let cover = getCover($)
        expect(cover).not.toBeUndefined()
        expect(typeof cover).toBe('string')
    })
})
