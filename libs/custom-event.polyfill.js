var isIE = /Trident/.test(navigator.userAgent);

if (!window.Event || isIE && (typeof window.Event !== 'function')) {
    var origEvent = window.Event;
    /**
     * @param {!string} inType
     * @param {?(EventInit)=} params
     */
    window.Event = function(inType, params) {
      params = params || {};
      var e = document.createEvent('Event');
      e.initEvent(inType, Boolean(params.bubbles), Boolean(params.cancelable));
      return e;
    };
    if (origEvent) {
      for (var i in origEvent) {
        window.Event[i] = origEvent[i];
      }
      window.Event.prototype = origEvent.prototype;
    }
  }

  // CustomEvent constructor shim
  if (!window.CustomEvent || isIE && (typeof window.CustomEvent !== 'function')) {
    /**
     * @template T
     * @param {!string} inType
     * @param {?(CustomEventInit<T>)=} params
     */
    window.CustomEvent = function(inType, params) {
      params = params || {};
      var e = /** @type {!CustomEvent} */ (document.createEvent('CustomEvent'));
      e.initCustomEvent(inType, Boolean(params.bubbles), Boolean(params.cancelable), params.detail);
      return e;
    };
    window.CustomEvent.prototype = window.Event.prototype;
  }