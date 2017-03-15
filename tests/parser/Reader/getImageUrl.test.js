import { getMangaChapterPage } from '../../../src/fetch'
import getImageUrl from '../../../src/parser/Reader/getImageUrl'


describe('getImageUrl Test', () => {
    test('Should return img link for chapter page', async () => {
        let $ = await getMangaChapterPage('http://www.mangatown.com/manga/the_gamer/c164/')
        let img = getImageUrl($)
        expect(img).not.toBeUndefined()
        expect(typeof img).toBe('string')
    })
})
