import correctUrl from '../src/correctUrl'

describe('getSeriesTitle', () => {
    it('Should return correct title for manga', async () => {
        let correct_url = 'http://www.mangatown.com/manga/the_gamer/'
        let url = correctUrl('The Gamer')
        expect(url).toBe(correct_url)

        url = correctUrl(`the gamer`)
        expect(url).toBe(correct_url)

    })
})