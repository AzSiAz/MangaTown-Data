import { getMangaPage } from '../../src/fetch'
import getCover from '../../src/parser/getCover'


describe('getCover Test', () => {
    it('Should return cover', async () => {
        let $ = await getMangaPage('the_gamer')
        let cover = getCover($)
        expect(cover).not.toBeUndefined()
        expect(typeof cover).toBe('string')
    })
})
