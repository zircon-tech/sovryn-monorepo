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
import LedgerEth from '@ledgerhq/hw-app-eth';
// import { byContractAddress } from '@ledgerhq/hw-app-eth/erc20';
// import Transport from '@ledgerhq/hw-transport';
import TransportU2F from '@ledgerhq/hw-transport-u2f';
import TransportWebUSB from '@ledgerhq/hw-transport-webusb';
// import { addHexPrefix, stripHexPrefix } from 'ethereumjs-util';
// import { serializeTransaction, Signature, UnsignedTransaction } from 'ethers/utils';
import { debug } from '@sovryn/common';
import { LedgerWallet } from '../wallets';
var _a = debug('@sovryn/wallet:ledger-provider'), log = _a.log, error = _a.error;
function translateRaw(key) {
    return key;
}
var getTransport = function () { return __awaiter(void 0, void 0, void 0, function () {
    var e_1;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                log('creating transport1');
                _a.label = 1;
            case 1:
                _a.trys.push([1, 3, , 4]);
                return [4 /*yield*/, TransportWebUSB.isSupported()];
            case 2:
                // if (await TransportWebBLE.isSupported()) {
                //   log('creating bluetooth transport');
                //   return TransportWebBLE.create();
                // }
                if (_a.sent()) {
                    log('creating usb transport');
                    return [2 /*return*/, TransportWebUSB.create()];
                }
                return [3 /*break*/, 4];
            case 3:
                e_1 = _a.sent();
                error('no supported transport', e_1);
                return [3 /*break*/, 4];
            case 4:
                log('connecting with u2f');
                return [2 /*return*/, TransportU2F.create()];
        }
    });
}); };
export function makeApp() {
    return __awaiter(this, void 0, void 0, function () {
        var transport;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, getTransport()];
                case 1:
                    transport = _a.sent();
                    return [2 /*return*/, new LedgerEth(transport)];
            }
        });
    });
}
var LedgerWalletProvider = /** @class */ (function () {
    function LedgerWalletProvider() {
    }
    LedgerWalletProvider.getChainCode = function (dPath) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, makeApp()
                        .then(function (app) { return app.getAddress(dPath, false, true); })
                        .then(function (res) {
                        return {
                            publicKey: res.publicKey,
                            chainCode: res.chainCode,
                        };
                    })
                        .catch(function (err) {
                        // eslint-disable-next-line @typescript-eslint/no-use-before-define
                        throw new Error(ledgerErrToMessage(err));
                    })];
            });
        });
    };
    LedgerWalletProvider.prototype.unlock = function (dPath, address, index) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, new LedgerWallet(address, dPath, index)];
            });
        });
    };
    return LedgerWalletProvider;
}());
export { LedgerWalletProvider };
var isU2FError = function (err) {
    return !!err && !!err.metaData;
};
var isStringError = function (err) {
    return typeof err === 'string';
};
var isErrorWithId = function (err) {
    return Object.prototype.hasOwnProperty.call(err, 'id') &&
        Object.prototype.hasOwnProperty.call(err, 'message');
};
export function ledgerErrToMessage(err) {
    // https://developers.yubico.com/U2F/Libraries/Client_error_codes.html
    if (isU2FError(err)) {
        // Timeout
        if (err.metaData.code === 5) {
            return translateRaw('LEDGER_TIMEOUT');
        }
        return err.metaData.type;
    }
    if (isStringError(err)) {
        // Wrong app logged into
        if (err.includes('6804')) {
            return translateRaw('LEDGER_WRONG_APP');
        }
        // Ledger locked
        if (err.includes('6801')) {
            return translateRaw('LEDGER_LOCKED');
        }
        return err;
    }
    if (isErrorWithId(err)) {
        // Browser doesn't support U2F
        if (err.message.includes('U2F not supported')) {
            return translateRaw('U2F_NOT_SUPPORTED');
        }
    }
    // Other
    return err.toString();
}
//# sourceMappingURL=ledger-wallet-provider.js.map