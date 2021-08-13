import Web3 from 'web3';
var Web3Node = /** @class */ (function () {
    function Web3Node(endpoint) {
        if (endpoint === void 0) { endpoint = 'web3'; }
        if (endpoint === 'web3') {
            this.provider = new Web3(window.web3.currentProvider);
        }
        else {
            this.provider = new Web3(new Web3.providers.HttpProvider(endpoint));
        }
    }
    Web3Node.prototype.estimateGas = function (tx) {
        return this.provider.eth.estimateGas(tx);
    };
    Web3Node.prototype.getBalance = function (address) {
        return this.provider.eth.getBalance(address.toLowerCase());
    };
    Web3Node.prototype.getCurrentBlock = function () {
        return this.provider.eth.getBlockNumber();
    };
    Web3Node.prototype.getBlock = function (blockNumber) {
        return this.provider.eth.getBlock(blockNumber);
    };
    Web3Node.prototype.getTransactionByHash = function (txhash) {
        return this.provider.eth.getTransaction(txhash);
    };
    Web3Node.prototype.getTransactionCount = function (address) {
        return this.provider.eth.getTransactionCount(address.toLowerCase());
    };
    Web3Node.prototype.getTransactionReceipt = function (txhash) {
        return this.provider.eth.getTransactionReceipt(txhash);
    };
    Web3Node.prototype.ping = function () {
        return this.provider.eth.net.isListening();
    };
    Web3Node.prototype.sendCallRequest = function (txObj) {
        return this.provider.eth.call(txObj);
    };
    Web3Node.prototype.sendRawTx = function (tx) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.provider.eth
                .sendSignedTransaction(tx)
                .once('transactionHash', function (value) { return resolve(value); })
                .once('error', function (error) { return reject(error); });
        });
    };
    return Web3Node;
}());
export { Web3Node };
//# sourceMappingURL=web3.js.map