class URLParser {
    constructor() {}

    getUrl(oFilter) {
        location.hash = `#${oFilter.category}/${oFilter.country}/${oFilter.year}`
        return location.hash
    }
}

export default URLParser