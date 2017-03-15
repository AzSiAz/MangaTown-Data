import convertTitle from '../convertTitle'

const getChapers = ($, title) => {
    if (!title) throw new Error('No title passed')
    return $('.chapter_list li a').map(function(i, e) {
        let parsedTitle = convertTitle(title)
        let chapter = parseFloat($(e).text().replace(title, ''))
        return {
            chapter: chapter,
            url: $(e).attr('href'),
            seriesTitle: parsedTitle
        };
    }).get()
}

export default getChapers