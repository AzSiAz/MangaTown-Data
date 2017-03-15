const getCover = ($) => {
    return $('.detail_info.clearfix').children('img').attr('src').trim()
}

export default getCover