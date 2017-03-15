import { getMangaPage } from '../src/fetch'

describe('getMangaPage Test', () => {
    test('Should return manga cheerio object for manga series name', async () => {
        let $ = await getMangaPage('the_gamer')
        expect($).toBeDefined()
        expect($).not.toThrow()
    })

    test('Should throw an error', async () => {
        try {
            await getMangaPage('srejknmlxdjnkm')
        }
        catch(err) {
            expect(err.message).toBe('Bad response from server')
        }
    })
})