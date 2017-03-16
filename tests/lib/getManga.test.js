import { getManga } from '../../src'

describe('getManga Test', () => {
    test('Should get a manga data', async () => {
        let data = await getManga('the gamer')
        expect(data).toBeDefined()
        expect(typeof data).toBe('object')
        expect(data).toHaveProperty('title')
        expect(data).toHaveProperty('chapters')
    })
})

