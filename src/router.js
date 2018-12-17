function URLParser() {
    this.category = 'all';
    this.country = 'all';
    this.year = 'all';
    console.log('URLParser loaded');
    this.getUrl()
}

URLParser.prototype.getUrl = function () {
    console.log(this.category)
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
    console.log(this.country)
    this.getUrl()
}

URLParser.prototype.changeYear = function (newYear) {
    this.year = newYear;
    this.getUrl()
}
module.exports = URLParser;