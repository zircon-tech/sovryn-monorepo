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
import { toHex } from 'web3-utils';
import { addHexPrefix } from 'ethereumjs-util';
import { Transaction } from 'ethereumjs-tx';
import { byContractAddress } from '@ledgerhq/hw-app-eth/erc20';
import { HardwareWallet } from '../deterministic';
import { ledgerErrToMessage, makeApp } from '../../providers';
import { calculateChainIdFromV, commonGenerator, getBufferFromHex, } from '../../utils';
import { debug } from '@sovryn/common';
import { ProviderType } from '../../constants';
var error = debug('@sovryn/wallet:ledger-wallet').error;
var LedgerWallet = /** @class */ (function (_super) {
    __extends(LedgerWallet, _super);
    function LedgerWallet() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    LedgerWallet.prototype.signRawTransaction = function (raw) {
        var _a;
        return __awaiter(this, void 0, void 0, function () {
            var hexed, common, tx, networkId, ethApp, tokenInfo, result, v, rv, cv, signedTx, signedChainId;
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
                        return [4 /*yield*/, makeApp()];
                    case 1:
                        ethApp = _b.sent();
                        if (!tx.to) return [3 /*break*/, 3];
                        tokenInfo = byContractAddress(tx.to.toString());
                        if (!tokenInfo) return [3 /*break*/, 3];
                        return [4 /*yield*/, ethApp.provideERC20TokenInformation(tokenInfo)];
                    case 2:
                        _b.sent();
                        _b.label = 3;
                    case 3: return [4 /*yield*/, ethApp.signTransaction(this.getPath(), tx.serialize().toString('hex'))];
                    case 4:
                        result = _b.sent();
                        v = result.v;
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
                        signedTx = new Transaction(__assign(__assign({}, hexed), { v: getBufferFromHex(v), r: getBufferFromHex(result.r), s: getBufferFromHex(result.s) }), {
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
    LedgerWallet.prototype.signMessage = function (msg) {
        return __awaiter(this, void 0, void 0, function () {
            var msgHex, ethApp, signed, err_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!msg) {
                            throw Error('No message to sign');
                        }
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 4, , 5]);
                        msgHex = Buffer.from(msg).toString('hex');
                        return [4 /*yield*/, makeApp()];
                    case 2:
                        ethApp = _a.sent();
                        return [4 /*yield*/, ethApp.signPersonalMessage(this.getPath(), msgHex)];
                    case 3:
                        signed = _a.sent();
                        /*
                         @ts-expect-error: There is a type mismatch between Signature and how we use it. @todo: resolve conflicts.
                        */
                        return [2 /*return*/, addHexPrefix(signed.r + signed.s + signed.v.toString(16))];
                    case 4:
                        err_1 = _a.sent();
                        throw new Error(ledgerErrToMessage(err_1));
                    case 5: return [2 /*return*/];
                }
            });
        });
    };
    LedgerWallet.prototype.displayAddress = function () {
        return __awaiter(this, void 0, void 0, function () {
            var path, ethApp, err_2;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        path = this.dPath + "/" + this.index;
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 4, , 5]);
                        return [4 /*yield*/, makeApp()];
                    case 2:
                        ethApp = _a.sent();
                        return [4 /*yield*/, ethApp.getAddress(path, true, false)];
                    case 3:
                        _a.sent();
                        return [2 /*return*/, true];
                    case 4:
                        err_2 = _a.sent();
                        error('Failed to display Ledger address:', err_2);
                        return [2 /*return*/, false];
                    case 5: return [2 /*return*/];
                }
            });
        });
    };
    LedgerWallet.prototype.getWalletType = function () {
        return ProviderType.LEDGER;
    };
    return LedgerWallet;
}(HardwareWallet));
export { LedgerWallet };
//# sourceMappingURL=ledger-wallet.js.map