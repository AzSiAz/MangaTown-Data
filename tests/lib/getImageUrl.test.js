const { getImageUrl } = require('../../src')

describe('getManga Test', () => {
    test('Should get a manga data', async () => {
        let data = await getImageUrl('http://www.mangatown.com/manga/the_gamer/c159/')
        expect(data).toBeDefined()
        expect(typeof data).toBe('object')
        expect(data).toHaveProperty('imageUrl')
    })
})

