const getImageUrl = ($) => {
    return $('#viewer img').first().attr('src');
}

export default getImageUrl