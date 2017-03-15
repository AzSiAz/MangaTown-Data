import { getMangaPage } from '../../src/fetch'
import getBasicArrayData from '../../src/parser/MangaPage/getBasicArrayData'


describe('getCover Test', () => {
    test('Should return basic array', async () => {
        let $ = await getMangaPage('the_gamer')

        let element = $('.detail_info.clearfix ul > li').map((index, element) => element = $(element))[2]
        let array = getBasicArrayData(element)

        expect(array).not.toBeUndefined()
        expect(typeof array).toBe('object')
    })
})
