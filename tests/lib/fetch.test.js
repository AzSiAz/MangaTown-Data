const { getMangaPage, getMangaChapterPage, getPage, searchManga } = require('../../src/lib/fetch')

describe('getMangaPage Test', () => {

    test('Should return cheerio object for manga series name', async () => {
        let $ = await getMangaPage('the_gamer')
        expect($).toBeDefined()
        expect($).not.toThrow()
    })

    test('Should throw an error', async () => {
        try {
            await getMangaPage('srejknmlxdjnkm')
        }
        catch(err) {
            expect(err.name).toBe('Error')
        }
    })
})

describe('getMangaChapterPage Test', () => {

    test('Should return cheerio object for manga chapter page', async () => {
        let $ = await getMangaChapterPage('http://www.mangatown.com/manga/the_gamer/c164/')
        expect($).toBeDefined()
        expect($).not.toThrow()
    })

    test('Should throw an error', async () => {
        try {
            await getMangaChapterPage('srejknmlxdjnkm')
        }
        catch(err) {
            expect(err.name).toBe('Error')
        }
    })
})

describe('searchManga Test', () => {

    test('Should return cheerio object for page', async () => {
        let $ = await getPage()
        expect($).toBeDefined()
        expect($).not.toThrow()
    })

    test('Should throw an error', async () => {
        try {
            await searchManga('cfgvhbjnkm')
        }
        catch(err) {
            expect(err.name).toBe('Error')
        }
    })
})

describe('getPage Test', () => {

    test('Should return cheerio object for page', async () => {
        let $ = await getPage()
        expect($).toBeDefined()
        expect($).not.toThrow()
    })

    test('Should throw an error', async () => {
        try {
            // @ts-ignore
            await getPage('cfgvhbjnkm')
        }
        catch(err) {
            expect(err.name).toBe('Error')
        }
    })
})