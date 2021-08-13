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
import { toChecksumAddress } from 'ethereumjs-util';
import WCProvider from '@walletconnect/web3-provider';
import { debug } from '@sovryn/common';
import { WalletConnectWallet } from '../wallets/non-deterministic';
var _a = debug('@sovryn/wallet:wallet-connect-provider'), log = _a.log, error = _a.error;
var WalletConnectProvider = /** @class */ (function () {
    function WalletConnectProvider(service) {
        this.service = service;
        log('initialized WalletConnect', service);
    }
    WalletConnectProvider.prototype.unlock = function (chainId, uriCallback) {
        var _this = this;
        return new Promise(function (resolve, reject) { return __awaiter(_this, void 0, void 0, function () {
            var wc, sessionRequestOpions, wallet_1, e_1;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 3, , 4]);
                        log('connecting using WalletConnect');
                        this.provider = new WCProvider({
                            infuraId: '8a669f27b05a457b880dfa89b536c220',
                            chainId: chainId,
                            rpc: {
                                30: 'https://public-node.rsk.co',
                                31: 'https://public-node.testnet.rsk.co',
                            },
                            qrcode: false,
                        });
                        wc = this.provider.wc;
                        sessionRequestOpions = { chainId: chainId };
                        if (!!wc.connected) return [3 /*break*/, 2];
                        return [4 /*yield*/, wc.createSession(sessionRequestOpions)];
                    case 1:
                        _a.sent();
                        _a.label = 2;
                    case 2:
                        log('WC URI: ', wc.uri);
                        uriCallback(wc.uri);
                        wc.on('connect', function (err, payload) {
                            if (err)
                                return err;
                            var params = payload.params;
                            var _a = params[0], chainId = _a.chainId, accounts = _a.accounts;
                            wallet_1 = new WalletConnectWallet(toChecksumAddress(accounts[0], chainId), chainId, _this.provider);
                            resolve(wallet_1);
                        });
                        wc.on('disconnect', function () {
                            log('disconnect event received', wallet_1);
                            _this.service.disconnect();
                        });
                        wc.on('session_update', function () {
                            log('session updated.');
                        });
                        return [3 /*break*/, 4];
                    case 3:
                        e_1 = _a.sent();
                        error('WalletConnect login errored', e_1);
                        reject(e_1);
                        return [3 /*break*/, 4];
                    case 4: return [2 /*return*/];
                }
            });
        }); });
    };
    return WalletConnectProvider;
}());
export { WalletConnectProvider };
//# sourceMappingURL=wallet-connect-provider.js.map