const { getMangaChapterPage } = require('../../../src/lib/fetch')
const getUrlList = require('../../../src/parser/Reader/getUrlList')


describe('getImageUrl Test', () => {
    test('Should return img link for chapter page', async () => {
        let $ = await getMangaChapterPage('http://www.mangatown.com/manga/the_gamer/c164/')
        let list = getUrlList($)
        
        expect(list).not.toBeUndefined()
        expect(typeof list).toBe('object')
        expect(list[0]).toHaveProperty('index')
        expect(list[0]).toHaveProperty('number')
        expect(list[0]).toHaveProperty('url')
    })
})
