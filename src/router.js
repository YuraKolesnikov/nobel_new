function URLParser() {
    this.category = 'all';
    this.country = 'all';
    this.year = 'all';
    console.log('URLParser loaded');
    /* Instant hash check */
    this.checkUrl()
}

URLParser.prototype.checkUrl = function() {
    return !location.hash ? location.hash = '#all' : 0
}

URLParser.prototype.getUrl = function () {
    location.hash = '#' + this.category + '/' + this.country + '/' + this.year;
    console.log('Current hash: ' + location.hash)
    return location.hash;
}

URLParser.prototype.changeCategory = function (newCategory) {
    this.category = newCategory;
    this.getUrl()
}

URLParser.prototype.changeCountry = function (newCountry) {
    this.country = newCountry;
    this.getUrl()
}

URLParser.prototype.changeYear = function (newYear) {
    this.year = newYear;
    this.getUrl()
}
module.exports = URLParser;