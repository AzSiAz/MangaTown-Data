const convertTitle = (title) => {
    title = title
        .toLowerCase()
        .replace(/[\s-:]/g, '_')    // Replace special characters and spaces by '_'
        .replace(/[^a-z0-9_]/g, '') // Remove characters that are not alphanumerical or _
        .replace(/__+/g, '_');      // Remove consecutive _
    return title;
};

export default convertTitle
