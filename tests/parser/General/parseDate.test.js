import parseDate from '../../../src/parser/General/parseDate'

describe('correctUrl Test', () => {
    test('Should return date', async () => {
        let date = 'Today 2:07pm'
        expect(parseDate('Today 2:07pm')).toBe(date)
    })
})