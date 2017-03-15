import { getMangaPage } from '../../src/fetch'
import getSeriesTitle from '../../src/parser/getSeriesTitle'

describe('getSeriesTitle', () => {
    it('Should return correct title for manga', async () => {
        let $ = await getMangaPage('the_gamer')
        expect($).toBeDefined()
        expect(getSeriesTitle($)).toBe('The Gamer')
    })
})

// http://www.mangatown.com/manga/the_gamer/