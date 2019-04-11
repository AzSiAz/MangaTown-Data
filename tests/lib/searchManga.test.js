const { searchManga } = require('../../src')

describe('getChapter Test', () => {
    test('Should get an url list of page in Chapter', async () => {
        let { data } = await searchManga('isekai')

        expect(data).toBeDefined()
        expect(typeof data).toBe('object')
        expect(data[0]).toHaveProperty('url')
        expect(data[0]).toHaveProperty('chapter')
        expect(data[0]).toHaveProperty('cover')
        expect(data[0]).toHaveProperty('date')
        expect(data[0]).toHaveProperty('title')
    }, 10000000)
})

