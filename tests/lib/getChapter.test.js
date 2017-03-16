import { getChapter } from '../../src'

describe('getChapter Test', () => {
    test('Should get an url list of page in Chapter', async () => {
        let data = await getChapter('http://www.mangatown.com/manga/the_gamer/c066/')
        expect(data).toBeDefined()
        expect(typeof data).toBe('object')
        expect(data[1]).toHaveProperty('index')
        expect(data[1]).toHaveProperty('number')
        expect(data[1]).toHaveProperty('url')
    })
})

