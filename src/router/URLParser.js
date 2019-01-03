class URLParser {
    constructor() {}

    getUrl(oFilter) {
        location.hash = `#${oFilter.category}/${oFilter.country}/${oFilter.year}`
        console.log(location.hash)
        return location.hash
    }
}

export default URLParser