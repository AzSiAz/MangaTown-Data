import nameToUrl from '../../src/parser/nameToUrl'

describe('correctUrl Test', () => {
    test('Should return correct url for manga', async () => {
        let correct_url = 'http://www.mangatown.com/manga/the_gamer/'
        let url = nameToUrl('The Gamer')
        expect(url).toBe(correct_url)
        url = nameToUrl(`Masamune-kun no Revenge`)
        correct_url = 'http://www.mangatown.com/manga/masamune_kun_no_revenge/'
        expect(url).toBe(correct_url)
    })
})