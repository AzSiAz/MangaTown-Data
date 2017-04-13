export default ($) => {

    let page = $('.next-page select').children('[selected]').text().trim().split('/')

    return {
        currentPage: page[0],
        maxPage: page[1]
    }
}