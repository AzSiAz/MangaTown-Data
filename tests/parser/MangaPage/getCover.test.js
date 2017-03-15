import { getMangaPage } from '../../../src/fetch'
import getCover from '../../../src/parser/MangaPage/getCover'


describe('getCover Test', () => {
    test('Should return cover', async () => {
        let $ = await getMangaPage('the_gamer')
        let cover = getCover($)
        expect(cover).not.toBeUndefined()
        expect(typeof cover).toBe('string')
    })
})
