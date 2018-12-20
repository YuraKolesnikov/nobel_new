function EventEmitter() {
    this.events = {}
}

EventEmitter.prototype.on = function(type, callback) {
    this.events[type] = this.events[type] || []
    this.events[type].push(callback)
}

EventEmitter.prototype.emit = function(type, arg) {
    this.events[type] ? this.events[type].forEach(callback => callback(arg)) : 0
}


module.exports = EventEmitter;