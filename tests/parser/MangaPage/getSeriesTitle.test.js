import { getMangaPage } from '../../../src/fetch'
import getSeriesTitle from '../../../src/parser/MangaPage/getSeriesTitle'

describe('getSeriesTitle Test', () => {
    test('Should return correct title for manga', async () => {
        let $ = await getMangaPage('the_gamer')
        expect($).toBeDefined()
        expect(getSeriesTitle($)).toBe('The Gamer')
    })
})

// http://www.mangatown.com/manga/the_gamer/