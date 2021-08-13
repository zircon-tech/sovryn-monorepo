var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
import { NetworkDictionary, walletProviderMap, web3Wallets, } from './dictionaries';
import { debug } from '@sovryn/common';
import { EventBag } from './utils';
var _a = debug('@sovryn/wallet:wallet.service'), log = _a.log, error = _a.error;
var WalletService = /** @class */ (function () {
    function WalletService() {
        this.events = new EventBag();
        this.networkDictionary = new NetworkDictionary();
        log('initialized');
    }
    WalletService.prototype.start = function (provider) {
        return __awaiter(this, void 0, void 0, function () {
            var Provider;
            return __generator(this, function (_a) {
                log("get provider " + provider);
                Provider = walletProviderMap[provider];
                if (Provider) {
                    return [2 /*return*/, new Provider(this)];
                }
                else {
                    error('provider not found.');
                    return [2 /*return*/, undefined];
                }
                return [2 /*return*/];
            });
        });
    };
    WalletService.prototype.connect = function (wallet) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                this._wallet = wallet;
                this._providerType = wallet.getWalletType();
                this.events.trigger('connected', this._wallet);
                log('connected to wallet', wallet);
                return [2 /*return*/];
            });
        });
    };
    WalletService.prototype.disconnect = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!this.wallet) return [3 /*break*/, 2];
                        return [4 /*yield*/, this.wallet.disconnect()];
                    case 1:
                        _a.sent();
                        _a.label = 2;
                    case 2:
                        this._wallet = undefined;
                        this._providerType = undefined;
                        this.events.trigger('disconnected');
                        log('disconnected');
                        return [2 /*return*/, true];
                }
            });
        });
    };
    /**
     * @deprecated use connected prop instead.
     */
    WalletService.prototype.isConnected = function () {
        return !!this.address;
    };
    Object.defineProperty(WalletService.prototype, "connected", {
        get: function () {
            return !!this.address && !!this.providerType;
        },
        enumerable: false,
        configurable: true
    });
    /**
     * @deprecated use address prop instead.
     */
    WalletService.prototype.getAddress = function () {
        return this.address || '';
    };
    /**
     * @deprecated use wallet prop instead.
     */
    WalletService.prototype.getWallet = function () {
        return this._wallet;
    };
    Object.defineProperty(WalletService.prototype, "address", {
        get: function () {
            var _a;
            return ((_a = this._wallet) === null || _a === void 0 ? void 0 : _a.getAddressString()) || '';
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(WalletService.prototype, "wallet", {
        get: function () {
            return this._wallet;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(WalletService.prototype, "providerType", {
        get: function () {
            return this._providerType;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(WalletService.prototype, "chainId", {
        // If wallet provider gives chain id then return it here.
        get: function () {
            var _a;
            // @ts-ignore
            return ((_a = this._wallet) === null || _a === void 0 ? void 0 : _a.chainId) || 0;
        },
        enumerable: false,
        configurable: true
    });
    // todo dont actually use this.
    // todo remove this
    WalletService.prototype.signTransaction = function (tx) {
        log('sign tx', tx, this.providerType);
        if (!this.wallet)
            throw Error('Not connected');
        if (web3Wallets.includes(this.wallet.getWalletType())) {
            return this.wallet.sendTransaction(tx);
        }
        return this.wallet.signRawTransaction(tx);
    };
    WalletService.prototype.signMessage = function (message) {
        if (!this.wallet)
            throw Error('Not connected');
        return this.wallet.signMessage(message, {});
    };
    return WalletService;
}());
export { WalletService };
//# sourceMappingURL=wallet.service.js.map