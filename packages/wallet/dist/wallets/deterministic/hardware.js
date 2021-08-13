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
import { DeterministicWallet } from './deterministic-wallet';
var HardwareWallet = /** @class */ (function (_super) {
    __extends(HardwareWallet, _super);
    function HardwareWallet() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    // Static functions can't be abstract, so implement an errorous one
    // @ts-expect-error: Terrible class inheritance pattern
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    HardwareWallet.getChainCode = function (dPath) {
        throw new Error("getChainCode is not implemented in " + this.constructor.name);
    };
    HardwareWallet.prototype.disconnect = function () {
        return Promise.resolve(true);
    };
    return HardwareWallet;
}(DeterministicWallet));
export { HardwareWallet };
//# sourceMappingURL=hardware.js.map