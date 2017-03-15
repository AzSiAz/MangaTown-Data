const getUrlList = ($) => {
    return $('.main .page_select')
        .first()
        .find('select option')
        .map(function(i, e) {
            return {
                index: i,
                number: $(e).text(),
                url: $(e).val()
            };
        })
        .get();
}

export default getUrlList