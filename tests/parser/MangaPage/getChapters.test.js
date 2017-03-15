import { getMangaPage } from '../../../src/fetch'
import getChapters from '../../../src/parser/MangaPage/getChapters'


describe('getCover Test', () => {
    test('Should not return chapters Array', async () => {
        try {
            let $ = await getMangaPage('the_gamer')
            getChapters($)
        }
        catch(err) {
            expect(err.message).toBe('No title passed')
        }
    })

    test('Should return chapters Array', async () => {
        let $ = await getMangaPage('the_gamer')
        let chapters = getChapters($, 'The Gamer')
        expect(chapters).not.toBeUndefined()
        expect(typeof chapters).toBe('object')
    })
})
