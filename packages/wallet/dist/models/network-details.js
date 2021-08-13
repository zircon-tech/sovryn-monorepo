import { ConnectionType } from '../constants';
var NetworkDetails = /** @class */ (function () {
    // eslint-disable-next-line no-useless-constructor
    function NetworkDetails(_chainId, _name, _networkType, _currencyName, _nodeUrl) {
        if (_networkType === void 0) { _networkType = ConnectionType.MAINNET; }
        this._chainId = _chainId;
        this._name = _name;
        this._networkType = _networkType;
        this._currencyName = _currencyName;
        this._nodeUrl = _nodeUrl;
        this._dPaths = new Map();
    }
    NetworkDetails.prototype.setNodeUrl = function (value) {
        this._nodeUrl = value;
        return this;
    };
    NetworkDetails.prototype.getNodeUrl = function () {
        return this._nodeUrl;
    };
    NetworkDetails.prototype.setExplorerTxUrl = function (value) {
        this._explorerTx = value;
        return this;
    };
    NetworkDetails.prototype.getExplorerTxUrl = function () {
        return this._explorerTx;
    };
    NetworkDetails.prototype.setExplorerAdrUrl = function (value) {
        this._explorerAdr = value;
        return this;
    };
    NetworkDetails.prototype.getExplorerAdrUrl = function () {
        return this._explorerAdr;
    };
    NetworkDetails.prototype.setLogo = function (value) {
        this._logo = value;
        return this;
    };
    NetworkDetails.prototype.getLogo = function () {
        return this._logo;
    };
    NetworkDetails.prototype.setNetworkId = function (value) {
        this._networkId = value;
        return this;
    };
    NetworkDetails.prototype.getNetworkId = function () {
        return this._networkId;
    };
    NetworkDetails.prototype.getChainId = function () {
        return this._chainId;
    };
    NetworkDetails.prototype.getName = function () {
        return this._name;
    };
    NetworkDetails.prototype.getCurrencyName = function () {
        return this._currencyName;
    };
    NetworkDetails.prototype.getNetworkType = function () {
        return this._networkType;
    };
    NetworkDetails.prototype.setDPaths = function (dPaths) {
        this._dPaths = dPaths;
        return this;
    };
    NetworkDetails.prototype.getDPaths = function () {
        return this._dPaths;
    };
    NetworkDetails.prototype.setWalletDPaths = function (wallet, paths) {
        this._dPaths.set(wallet, paths);
        return this;
    };
    NetworkDetails.prototype.getWalletDPaths = function (wallet) {
        return this._dPaths.get(wallet);
    };
    return NetworkDetails;
}());
export { NetworkDetails };
//# sourceMappingURL=network-details.js.map