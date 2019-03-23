const { getMangaPage } = require('../../../src/lib/fetch')
const getMetadata = require('../../../src/parser/MangaPage/getMetadata')


describe('getMetadata Test', () => {
    test('Should return correct metadata format', async () => {
        let $ = await getMangaPage('the_gamer')
        let metadata = getMetadata($)
        expect(metadata).not.toBeUndefined()
        expect(metadata).toHaveProperty('title')
        expect(metadata).toHaveProperty('cover')
        expect(metadata).toHaveProperty('alternateName')
        expect(metadata).toHaveProperty('demographic')
        expect(metadata).toHaveProperty('genre')
        expect(metadata).toHaveProperty('author')
        expect(metadata).toHaveProperty('artist')
        expect(metadata).toHaveProperty('status')
        expect(metadata).toHaveProperty('rank')
        expect(metadata).toHaveProperty('type')
        expect(metadata).toHaveProperty('summary')
    })
})
