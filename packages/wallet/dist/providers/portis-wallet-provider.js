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
import Portis from '@portis/web3';
import Web3 from 'web3';
import { debug } from '@sovryn/common';
import { PortisWallet } from '../wallets/non-deterministic';
var _a = debug('@sovryn/wallet:portis-wallet-provider'), log = _a.log, error = _a.error;
var chainIdToNetwork = {
    1: 'mainnet',
    3: 'ropsten',
    30: 'orchid',
    31: 'orchidTestnet',
};
var PortisWalletProvider = /** @class */ (function () {
    function PortisWalletProvider() {
    }
    PortisWalletProvider.prototype.unlock = function (chainId) {
        var _this = this;
        log('connecting using injectable wallet');
        var portis = new Portis('469a25c8-1101-4c57-823d-c47cb328f788', this.getNetwork(chainId));
        this.provider = portis.provider;
        return new Promise(function (resolve, reject) { return __awaiter(_this, void 0, void 0, function () {
            var web3, accounts, e_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        web3 = new Web3(this.provider);
                        return [4 /*yield*/, web3.eth.getAccounts()];
                    case 1:
                        accounts = _a.sent();
                        resolve(new PortisWallet(toChecksumAddress(accounts[0], chainId), chainId, portis));
                        return [3 /*break*/, 3];
                    case 2:
                        e_1 = _a.sent();
                        error('portis login errored', e_1);
                        reject(e_1);
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        }); });
    };
    PortisWalletProvider.prototype.getNetwork = function (chainId) {
        if (chainIdToNetwork.hasOwnProperty(chainId)) {
            return chainIdToNetwork[chainId];
        }
        return 'orchid';
    };
    return PortisWalletProvider;
}());
export { PortisWalletProvider };
//# sourceMappingURL=portis-wallet-provider.js.map