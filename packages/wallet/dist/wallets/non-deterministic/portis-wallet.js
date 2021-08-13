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
import { ProviderType } from '../../constants';
import { Web3Wallet } from './web3';
var PortisWallet = /** @class */ (function (_super) {
    __extends(PortisWallet, _super);
    function PortisWallet(address, chainId, portis) {
        var _this = _super.call(this, address, chainId, portis.provider) || this;
        _this.portis = portis;
        return _this;
    }
    PortisWallet.prototype.getWalletType = function () {
        return ProviderType.PORTIS;
    };
    PortisWallet.prototype.disconnect = function () {
        // @ts-ignore
        return this.portis.logout();
    };
    return PortisWallet;
}(Web3Wallet));
export { PortisWallet };
//# sourceMappingURL=portis-wallet.js.map