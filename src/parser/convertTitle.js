/**
 * Convert special char inside title
 * @param {string} title 
 * @returns {string}
 */
module.exports = (title) => {
    return title
        .toLowerCase()
        .replace(/[\s-:]/g, '_')    // Replace special characters and spaces by '_'
        .replace(/[^a-z0-9_]/g, '') // Remove characters that are not alphanumerical or _
        .replace(/__+/g, '_');      // Remove consecutive _
};
