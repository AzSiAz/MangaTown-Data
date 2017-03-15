import convertTitle from '../../src/parser/convertTitle'

describe('correctUrl Test', () => {
    test('Should return correct title for manga', async () => {
        let correctTitle = 'the_gamer'
        let title = convertTitle('The Gamer')
        expect(title).toBe(correctTitle)
        title = convertTitle(`Masamune-kun no Revenge`)
        correctTitle = 'masamune_kun_no_revenge'
        expect(title).toBe(correctTitle)
    })
})