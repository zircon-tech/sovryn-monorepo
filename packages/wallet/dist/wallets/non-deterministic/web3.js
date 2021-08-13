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
import { bufferToHex } from 'ethereumjs-util';
import { debug } from '@sovryn/common';
import { ProviderType } from '../../constants';
var _a = debug('@sovryn/wallet:web3-wallet'), log = _a.log, error = _a.error;
var Web3Wallet = /** @class */ (function () {
    function Web3Wallet(address, chainId, provider) {
        this.address = address;
        this.chainId = chainId;
        this.provider = provider;
    }
    Web3Wallet.prototype.getAddressString = function () {
        return this.address;
    };
    // @ts-ignore
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    Web3Wallet.prototype.signRawTransaction = function (tx) {
        throw new Error('signRawTransaction is not available for web3 wallets.');
    };
    Web3Wallet.prototype.sendTransaction = function (tx) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            new Web3(_this.provider).eth
                .sendTransaction(_this.prepareRawTransactionData(tx))
                .once('transactionHash', function (response) {
                log('signed transaction', response);
                resolve(response);
            })
                .once('error', function (err) {
                error('sending failed', err);
                reject(err);
            });
        });
    };
    Web3Wallet.prototype.signMessage = function (msg) {
        return __awaiter(this, void 0, void 0, function () {
            var msgHex;
            return __generator(this, function (_a) {
                msgHex = bufferToHex(Buffer.from(msg));
                return [2 /*return*/, new Web3(this.provider).eth.personal.sign(msgHex, this.address.toLowerCase(), '')];
            });
        });
    };
    Web3Wallet.prototype.getWalletType = function () {
        return ProviderType.WEB3;
    };
    Web3Wallet.prototype.disconnect = function () {
        return Promise.resolve(true);
    };
    Web3Wallet.prototype.prepareRawTransactionData = function (tx) {
        var _a;
        var chainId = Number(tx.chainId || this.chainId);
        return {
            chainId: chainId,
            data: tx.data,
            from: this.address.toLowerCase(),
            gas: tx.gasLimit,
            gasPrice: tx.gasPrice,
            nonce: Number(tx.nonce),
            to: (_a = tx.to) === null || _a === void 0 ? void 0 : _a.toLowerCase(),
            value: tx.value,
        };
    };
    return Web3Wallet;
}());
export { Web3Wallet };
//# sourceMappingURL=web3.js.map