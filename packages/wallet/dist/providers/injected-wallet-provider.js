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
import Web3 from 'web3';
import { toChecksumAddress } from 'ethereumjs-util';
import { debug } from '@sovryn/common';
import { Web3Wallet } from '../wallets/non-deterministic';
var _a = debug('@sovryn/wallet:injected-wallet'), log = _a.log, error = _a.error;
var InjectedWalletProvider = /** @class */ (function () {
    function InjectedWalletProvider() {
        log('constructing injected wallet provider.');
        var ethereum = window.ethereum;
        if (ethereum) {
            log('has ethereum injected.');
            if (window.Web3) {
                log('has web3 injected, overwriting');
                window.web3 = new Web3(ethereum);
            }
            this.provider = ethereum;
        }
        else if (window.web3) {
            log('has web3 injected.');
            // Legacy handling; will become unavailable 11/2.
            var web3 = window.web3;
            if (!web3 || !web3.currentProvider || !web3.currentProvider.sendAsync) {
                throw new Error('Web3 not found. Please check that MetaMask is installed');
            }
            this.provider = web3.currentProvider;
        }
    }
    InjectedWalletProvider.prototype.unlock = function () {
        var _this = this;
        log('connecting using injectable wallet');
        return new Promise(function (resolve, reject) { return __awaiter(_this, void 0, void 0, function () {
            var accounts, chainId, e_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 3, , 4]);
                        return [4 /*yield*/, this.provider
                                .request({ method: 'eth_requestAccounts' })
                                .then(function (response) {
                                return Array.isArray(response) ? response : (response === null || response === void 0 ? void 0 : response.result) || [];
                            })
                                .catch(function (err) {
                                if (err.code === 4001) {
                                    error('Connection rejected by user.');
                                }
                                else {
                                    error('Failed to connect', err);
                                }
                            })];
                    case 1:
                        accounts = _a.sent();
                        if (!accounts) {
                            return [2 /*return*/, reject(Error('Permission was not given.'))];
                        }
                        return [4 /*yield*/, this.provider
                                .request({ method: 'eth_chainId' })
                                .then(function (response) { return Number(response.result || response); })];
                    case 2:
                        chainId = _a.sent();
                        resolve(new Web3Wallet(toChecksumAddress(accounts[0], chainId), chainId, this.provider));
                        return [3 /*break*/, 4];
                    case 3:
                        e_1 = _a.sent();
                        reject(e_1);
                        return [3 /*break*/, 4];
                    case 4: return [2 /*return*/];
                }
            });
        }); });
    };
    return InjectedWalletProvider;
}());
export { InjectedWalletProvider };
//# sourceMappingURL=injected-wallet-provider.js.map