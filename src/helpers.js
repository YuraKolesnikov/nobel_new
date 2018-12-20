class EventEmitter {
    constructor() {
        this.events = {};
    }
    on(type, callback) {
        this.events[type] = this.events[type] || [];
        this.events[type].push(callback);
    }
    emit(type, arg) {
        this.events[type] ? this.events[type].forEach(callback => callback(arg)) : 0;
    }
}

export default EventEmitter;