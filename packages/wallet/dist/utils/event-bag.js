var EventBag = /** @class */ (function () {
    function EventBag() {
        var _this = this;
        this._triggers = {};
        this.on = function (event, callback) {
            var key = event;
            if (!_this._triggers[key]) {
                _this._triggers[key] = [];
            }
            _this._triggers[key].push(callback);
        };
        this.off = function (event, callback) {
            var key = event;
            if (_this._triggers.hasOwnProperty(key)) {
                if (!callback) {
                    _this._triggers[key] = [];
                }
                else {
                    _this._triggers[key] = _this._triggers[key].filter(function (item) { return item !== callback; });
                }
            }
        };
    }
    EventBag.prototype.trigger = function (event) {
        var _a;
        var values = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            values[_i - 1] = arguments[_i];
        }
        var key = event;
        if (this._triggers[key]) {
            for (var i in this._triggers[key]) {
                if (this._triggers[key].hasOwnProperty(i)) {
                    (_a = this._triggers[key])[i].apply(_a, values);
                }
            }
        }
    };
    return EventBag;
}());
export { EventBag };
//# sourceMappingURL=event-bag.js.map