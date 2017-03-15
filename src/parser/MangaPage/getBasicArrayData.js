const getBasicArrayData = (element, $) => {
    return element.children('a').map((i, el) => {
        el = $(el)
        return {
            name: el.text().trim(),
            link: el.attr('href')
        }
    }).get()
}

export default getBasicArrayData