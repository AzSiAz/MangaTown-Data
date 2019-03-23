/**
 * Return a correct mangatown url from series name
 * @param {string} seriesName 
 * @returns {string}
 */
module.exports = (seriesName) => {
    seriesName = seriesName
        .toLowerCase()
        .replace(/[\s-:]/g, '_')    // Replace special characters and spaces by '_'
        .replace(/[^a-z0-9_]/g, '') // Remove characters that are not alphanumerical or _
        .replace(/__+/g, '_');      // Remove consecutive _
    return 'http://www.mangatown.com/manga/' + seriesName + '/';
};
