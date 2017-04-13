import parseDate from './parseDate'
import paginationParser from './paginationParser'

const getMangaList = ($) => {
    return {
        page: paginationParser($),
        data: $('.main .manga_pic_list li')
            .map((index, element) => {
                element = $(element)
                let title = element.children('.title').children()
                    .first().attr('title')
                let chapter = parseFloat(element.children('.new_chapter')
                    .children('a').attr('title').replace(title, ''))
                return {
                    title: title,
                    url: element.children('.title').children().first().attr('href'),
                    cover: element.children('.manga_cover').children('img').attr('src'),
                    chapter: chapter,
                    date: parseDate(element.children().last().text().trim())
                }
            })
            .get()
    }
}

export default getMangaList