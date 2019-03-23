const { getMangaPage } = require('../../../src/lib/fetch')
const getBasicArrayData = require('../../../src/parser/MangaPage/getBasicArrayData')


describe('getCover Test', () => {
    test('Should return basic array', async () => {
        let $ = await getMangaPage('the_gamer')

        let el = $('.detail_info.clearfix ul > li').map((index, element) => $(element))[2]
        let array = getBasicArrayData(el, $)

        expect(array).not.toBeUndefined()
        expect(typeof array).toBe('object')
    })
})
