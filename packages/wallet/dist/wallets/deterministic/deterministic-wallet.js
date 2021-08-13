import { addHexPrefix, publicToAddress } from 'ethereumjs-util';
import HDKey from 'hdkey';
var DeterministicWallet = /** @class */ (function () {
    function DeterministicWallet(address, dPath, index, chainId) {
        this.address = address;
        this.dPath = dPath;
        this.index = index;
        this.chainId = chainId;
    }
    DeterministicWallet.prototype.getAddressString = function () {
        return this.address;
    };
    DeterministicWallet.prototype.getPath = function () {
        return this.dPath + "/" + this.index;
    };
    return DeterministicWallet;
}());
export { DeterministicWallet };
export var getDeterministicWallets = function (args) {
    var seed = args.seed, dPath = args.dPath, publicKey = args.publicKey, chainCode = args.chainCode, limit = args.limit, offset = args.offset;
    var pathBase;
    var hdk;
    // if seed present, treat as mnemonic
    // if pubKey & chainCode present, treat as HW wallet
    if (seed) {
        hdk = HDKey.fromMasterSeed(Buffer.from(seed, 'hex'));
        pathBase = dPath;
    }
    else if (publicKey && chainCode) {
        hdk = new HDKey();
        hdk.publicKey = Buffer.from(publicKey, 'hex');
        hdk.chainCode = Buffer.from(chainCode, 'hex');
        pathBase = 'm';
    }
    else {
        return [];
    }
    var wallets = [];
    for (var i = 0; i < limit; i++) {
        var index = i + offset;
        var dkey = hdk.derive(pathBase + "/" + index);
        var address = publicToAddress(dkey.publicKey, true).toString('hex');
        wallets.push({
            index: index,
            address: addHexPrefix(address).toLowerCase(),
        });
    }
    return wallets;
};
//# sourceMappingURL=deterministic-wallet.js.map