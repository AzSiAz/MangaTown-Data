const getChapers = ($, title) => {
    if (!title) throw new Error('No title passed')
    return $('.chapter_list li a').map(function(i, e) {
        let chapter = parseFloat($(e).text().replace(title, ''))
        return {
            chapter: chapter,
            url: $(e).attr('href')
        };
    }).get()
}

export default getChapers