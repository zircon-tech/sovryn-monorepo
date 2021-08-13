var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
import { EventEmitter } from 'events';
var PromiEvent = /** @class */ (function (_super) {
    __extends(PromiEvent, _super);
    function PromiEvent(executor) {
        var _this = _super.call(this) || this;
        _this.promise = new Promise(executor);
        return _this;
    }
    PromiEvent.prototype.then = function (onfulfilled, onrejected) {
        return this.promise.then(onfulfilled, onrejected);
    };
    PromiEvent.prototype.catch = function (onrejected) {
        return this.promise.catch(onrejected);
    };
    PromiEvent.prototype.finally = function (onfinally) {
        return this.promise.finally(onfinally);
    };
    PromiEvent.resolve = function (value) {
        return new PromiEvent(function (resolve1) { return resolve1(value); });
    };
    PromiEvent.reject = function (reason) {
        return new PromiEvent(function (_, reject) { return reject(reason); });
    };
    return PromiEvent;
}(EventEmitter));
export default PromiEvent;
//# sourceMappingURL=promievent.js.map