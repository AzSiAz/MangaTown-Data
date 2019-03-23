const { getMangaChapterPage } = require('../../../src/lib/fetch')
const getImageUrl = require('../../../src/parser/Reader/getImageUrl')


describe('getImageUrl Test', () => {
    test('Should return img link for chapter page', async () => {
        let $ = await getMangaChapterPage('http://www.mangatown.com/manga/the_gamer/c164/')
        let img = getImageUrl($)
        expect(img).not.toBeUndefined()
        expect(typeof img).toBe('string')
    })
})
