function EventEmitter() {
    this.oEvents = {}
}

EventEmitter.prototype.on = function(sType, fnCallback) {
    this.oEvents[sType] = this.oEvents[sType] || []
    this.oEvents[sType].push(fnCallback)
}

EventEmitter.prototype.emit = function(sType, oArgument) {
    this.oEvents[sType]
    ? this.oEvents[sType].forEach(function(fnCallback) { return fnCallback(oArgument) })
    : 0
}

module.exports = EventEmitter;