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
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
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
import TrezorConnect from 'trezor-connect';
import { toHex } from 'web3-utils';
import { addHexPrefix } from 'ethereumjs-util';
import { Transaction } from 'ethereumjs-tx';
import { HardwareWallet } from './deterministic';
import { makeTrezorManifest } from '../providers';
import { calculateChainIdFromV, commonGenerator, getBufferFromHex, } from '../utils';
import { ProviderType } from '../constants';
import { debug } from '@sovryn/common';
var _a = debug('@sovryn/wallet:trezor-wallet'), log = _a.log, error = _a.error;
var TrezorWallet = /** @class */ (function (_super) {
    __extends(TrezorWallet, _super);
    function TrezorWallet(address, dPath, index, chainId) {
        var _this = this;
        log('init');
        _this = _super.call(this, address, dPath, index, chainId) || this;
        makeTrezorManifest();
        return _this;
    }
    TrezorWallet.prototype.signRawTransaction = function (raw) {
        var _a;
        return __awaiter(this, void 0, void 0, function () {
            var hexed, common, tx, networkId, result, v, rv, cv, signedTx, signedChainId;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        hexed = {
                            to: (_a = raw.to) === null || _a === void 0 ? void 0 : _a.toLowerCase(),
                            value: toHex(raw.value),
                            gasLimit: toHex(raw.gasLimit),
                            gasPrice: toHex(raw.gasPrice),
                            nonce: toHex(raw.nonce),
                            data: raw.data ? toHex(raw.data) : '0x',
                        };
                        log('data to send', hexed);
                        common = commonGenerator(raw);
                        tx = new Transaction(hexed, {
                            common: common,
                        });
                        networkId = tx.getChainId();
                        // @ts-ignore
                        tx.raw[6] = Buffer.from([networkId]);
                        tx.raw[7] = Buffer.from([]);
                        tx.raw[8] = Buffer.from([]);
                        if (!raw.chainId) {
                            throw Error('Missing chainId on tx');
                        }
                        return [4 /*yield*/, TrezorConnect.ethereumSignTransaction({
                                path: this.getPath(),
                                transaction: __assign(__assign({}, hexed), { chainId: networkId }),
                            })];
                    case 1:
                        result = _b.sent();
                        if (!result.success)
                            throw Error(result.payload.error);
                        v = result.payload.v;
                        if (raw.chainId && raw.chainId > 0) {
                            rv = parseInt(v, 16);
                            cv = raw.chainId * 2 + 35;
                            /* tslint:disable no-bitwise */
                            if (rv !== cv && (rv & cv) !== rv) {
                                // (rv !== cv) : for v is truncated byte case
                                // (rv & cv): make cv to truncated byte
                                // (rv & cv) !== rv: signature v bit needed
                                cv += 1; // add signature v bit.
                            }
                            v = cv.toString(16);
                        }
                        signedTx = new Transaction(__assign(__assign({}, hexed), { v: getBufferFromHex(v), r: getBufferFromHex(result.payload.r), s: getBufferFromHex(result.payload.s) }), {
                            common: common,
                        });
                        signedChainId = calculateChainIdFromV(signedTx.v);
                        if (signedChainId !== networkId) {
                            throw Error("Chains doesn't match");
                        }
                        return [2 /*return*/, addHexPrefix(signedTx.serialize().toString('hex'))];
                }
            });
        });
    };
    TrezorWallet.prototype.signMessage = function (msg) {
        return __awaiter(this, void 0, void 0, function () {
            var msgHex, result, err_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        log('sign message', msg);
                        if (!msg) {
                            throw Error('No message to sign');
                        }
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 3, , 4]);
                        msgHex = Buffer.from(msg).toString('hex');
                        return [4 /*yield*/, TrezorConnect.ethereumSignMessage({
                                path: this.getPath(),
                                message: msgHex,
                                hex: true,
                            })];
                    case 2:
                        result = _a.sent();
                        if (!result.success)
                            throw Error(result.payload.error);
                        return [2 /*return*/, addHexPrefix(result.payload.signature)];
                    case 3:
                        err_1 = _a.sent();
                        // eslint-disable-next-line @typescript-eslint/no-use-before-define
                        throw new Error(trezorErrToMessage(err_1));
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    TrezorWallet.prototype.displayAddress = function () {
        return __awaiter(this, void 0, void 0, function () {
            var result;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, TrezorConnect.ethereumGetAddress({
                            path: this.getPath(),
                            showOnTrezor: true,
                        })];
                    case 1:
                        result = _a.sent();
                        return [2 /*return*/, result.success];
                }
            });
        });
    };
    TrezorWallet.prototype.getWalletType = function () {
        return ProviderType.TREZOR;
    };
    return TrezorWallet;
}(HardwareWallet));
export { TrezorWallet };
function trezorErrToMessage(err) {
    error(err);
    return err.message;
}
//# sourceMappingURL=trezor-wallet.js.map