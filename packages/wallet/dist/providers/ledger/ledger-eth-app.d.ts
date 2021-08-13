/**
 * Ethereum API
 *
 * @example
 * import Eth from "@ledgerhq/hw-app-eth";
 * const eth = new Eth(transport)
 */
export default class Eth {
    constructor(transport: any, scrambleKey?: string);
    /**
     * get Ethereum address for a given BIP 32 path.
     * @param path a path in BIP 32 format
     * @option boolDisplay optionally enable or not the display
     * @option boolChaincode optionally enable or not the chaincode request
     * @return an object with a publicKey, address and (optionally) chainCode
     * @example
     * eth.getAddress("44'/60'/0'/0/0").then(o => o.address)
     */
    getAddress(path: any, boolDisplay: any, boolChaincode: any): any;
    /**
     * This commands provides a trusted description of an ERC 20 token
     * to associate a contract address with a ticker and number of decimals.
     *
     * It shall be run immediately before performing a transaction involving a contract
     * calling this contract address to display the proper token information to the user if necessary.
     *
     * @param {*} info: a blob from "erc20.js" utilities that contains all token information.
     *
     * @example
     * import { byContractAddress } from "@ledgerhq/hw-app-eth/erc20"
     * const zrxInfo = byContractAddress("0xe41d2489571d322189246dafa5ebde1f4699f498")
     * if (zrxInfo) await appEth.provideERC20TokenInformation(zrxInfo)
     * const signed = await appEth.signTransaction(path, rawTxHex)
     */
    provideERC20TokenInformation({ data }: {
        data: any;
    }): any;
    /**
     * You can sign a transaction and retrieve v, r, s given the raw transaction and the BIP 32 path of the account to sign
     * @example
     eth.signTransaction("44'/60'/0'/0/0", "e8018504e3b292008252089428ee52a8f3d6e5d15f8b131996950d7f296c7952872bd72a2487400080").then(result => ...)
     */
    signTransaction(path: any, rawTxHex: any): any;
    /**
     */
    getAppConfiguration(): any;
    /**
     * You can sign a message according to eth_sign RPC call and retrieve v, r, s given the message and the BIP 32 path of the account to sign.
     * @example
     eth.signPersonalMessage("44'/60'/0'/0/0", Buffer.from("test").toString("hex")).then(result => {
    var v = result['v'] - 27;
    v = v.toString(16);
    if (v.length < 2) {
      v = "0" + v;
    }
    console.log("Signature 0x" + result['r'] + result['s'] + v);
    })
     */
    signPersonalMessage(path: any, messageHex: any): any;
    /**
     * Sign a prepared message following web3.eth.signTypedData specification. The host computes the domain separator and hashStruct(message)
     * @example
     eth.signEIP712HashedMessage("44'/60'/0'/0/0", Buffer.from("0101010101010101010101010101010101010101010101010101010101010101").toString("hex"), Buffer.from("0202020202020202020202020202020202020202020202020202020202020202").toString("hex")).then(result => {
    var v = result['v'] - 27;
    v = v.toString(16);
    if (v.length < 2) {
      v = "0" + v;
    }
    console.log("Signature 0x" + result['r'] + result['s'] + v);
    })
     */
    signEIP712HashedMessage(path: any, domainSeparatorHex: any, hashStructMessageHex: any): any;
    /**
     * get Stark public key for a given BIP 32 path.
     * @param path a path in BIP 32 format
     * @option boolDisplay optionally enable or not the display
     * @return the Stark public key
     */
    starkGetPublicKey(path: any, boolDisplay: any): any;
    /**
     * sign a Stark order
     * @param path a path in BIP 32 format
     * @option sourceTokenAddress contract address of the source token (not present for ETH)
     * @param sourceQuantization quantization used for the source token
     * @option destinationTokenAddress contract address of the destination token (not present for ETH)
     * @param destinationQuantization quantization used for the destination token
     * @param sourceVault ID of the source vault
     * @param destinationVault ID of the destination vault
     * @param amountSell amount to sell
     * @param amountBuy amount to buy
     * @param nonce transaction nonce
     * @param timestamp transaction validity timestamp
     * @return the signature
     */
    starkSignOrder(path: any, sourceTokenAddress: any, sourceQuantization: any, destinationTokenAddress: any, destinationQuantization: any, sourceVault: any, destinationVault: any, amountSell: any, amountBuy: any, nonce: any, timestamp: any): any;
    /**
     * sign a Stark order using the Starkex V2 protocol
     * @param path a path in BIP 32 format
     * @option sourceTokenAddress contract address of the source token (not present for ETH)
     * @param sourceQuantizationType quantization type used for the source token
     * @option sourceQuantization quantization used for the source token (not present for erc 721 or mintable erc 721)
     * @option sourceMintableBlobOrTokenId mintable blob (mintable erc 20 / mintable erc 721) or token id (erc 721) associated to the source token
     * @option destinationTokenAddress contract address of the destination token (not present for ETH)
     * @param destinationQuantizationType quantization type used for the destination token
     * @option destinationQuantization quantization used for the destination token (not present for erc 721 or mintable erc 721)
     * @option destinationMintableBlobOrTokenId mintable blob (mintable erc 20 / mintable erc 721) or token id (erc 721) associated to the destination token
     * @param sourceVault ID of the source vault
     * @param destinationVault ID of the destination vault
     * @param amountSell amount to sell
     * @param amountBuy amount to buy
     * @param nonce transaction nonce
     * @param timestamp transaction validity timestamp
     * @return the signature
     */
    starkSignOrder_v2(path: any, sourceTokenAddress: any, sourceQuantizationType: any, sourceQuantization: any, sourceMintableBlobOrTokenId: any, destinationTokenAddress: any, destinationQuantizationType: any, destinationQuantization: any, destinationMintableBlobOrTokenId: any, sourceVault: any, destinationVault: any, amountSell: any, amountBuy: any, nonce: any, timestamp: any): any;
    /**
     * sign a Stark transfer
     * @param path a path in BIP 32 format
     * @option transferTokenAddress contract address of the token to be transferred (not present for ETH)
     * @param transferQuantization quantization used for the token to be transferred
     * @param targetPublicKey target Stark public key
     * @param sourceVault ID of the source vault
     * @param destinationVault ID of the destination vault
     * @param amountTransfer amount to transfer
     * @param nonce transaction nonce
     * @param timestamp transaction validity timestamp
     * @return the signature
     */
    starkSignTransfer(path: any, transferTokenAddress: any, transferQuantization: any, targetPublicKey: any, sourceVault: any, destinationVault: any, amountTransfer: any, nonce: any, timestamp: any): any;
    /**
     * sign a Stark transfer or conditional transfer using the Starkex V2 protocol
     * @param path a path in BIP 32 format
     * @option transferTokenAddress contract address of the token to be transferred (not present for ETH)
     * @param transferQuantizationType quantization type used for the token to be transferred
     * @option transferQuantization quantization used for the token to be transferred (not present for erc 721 or mintable erc 721)
     * @option transferMintableBlobOrTokenId mintable blob (mintable erc 20 / mintable erc 721) or token id (erc 721) associated to the token to be transferred
     * @param targetPublicKey target Stark public key
     * @param sourceVault ID of the source vault
     * @param destinationVault ID of the destination vault
     * @param amountTransfer amount to transfer
     * @param nonce transaction nonce
     * @param timestamp transaction validity timestamp
     * @option conditionalTransferAddress onchain address of the condition for a conditional transfer
     * @option conditionalTransferFact fact associated to the condition for a conditional transfer
     * @return the signature
     */
    starkSignTransfer_v2(path: any, transferTokenAddress: any, transferQuantizationType: any, transferQuantization: any, transferMintableBlobOrTokenId: any, targetPublicKey: any, sourceVault: any, destinationVault: any, amountTransfer: any, nonce: any, timestamp: any, conditionalTransferAddress: any, conditionalTransferFact: any): any;
    /**
     * provide quantization information before singing a deposit or withdrawal Stark powered contract call
     *
     * It shall be run following a provideERC20TokenInformation call for the given contract
     *
     * @param operationContract contract address of the token to be transferred (not present for ETH)
     * @param operationQuantization quantization used for the token to be transferred
     */
    starkProvideQuantum(operationContract: any, operationQuantization: any): any;
    /**
     * provide quantization information before singing a deposit or withdrawal Stark powered contract call using the Starkex V2 protocol
     *
     * It shall be run following a provideERC20TokenInformation call for the given contract
     *
     * @param operationContract contract address of the token to be transferred (not present for ETH)
     * @param operationQuantizationType quantization type of the token to be transferred
     * @option operationQuantization quantization used for the token to be transferred (not present for erc 721 or mintable erc 721)
     * @option operationMintableBlobOrTokenId mintable blob (mintable erc 20 / mintable erc 721) or token id (erc 721) of the token to be transferred
     */
    starkProvideQuantum_v2(operationContract: any, operationQuantizationType: any, operationQuantization: any, operationMintableBlobOrTokenId: any): any;
    /**
     * sign the given hash over the Stark curve
     * It is intended for speed of execution in case an unknown Stark model is pushed and should be avoided as much as possible.
     * @param path a path in BIP 32 format
     * @param hash hexadecimal hash to sign
     * @return the signature
     */
    starkUnsafeSign(path: any, hash: any): any;
    /**
     * get an Ethereum 2 BLS-12 381 public key for a given BIP 32 path.
     * @param path a path in BIP 32 format
     * @option boolDisplay optionally enable or not the display
     * @return an object with a publicKey
     * @example
     * eth.eth2GetPublicKey("12381/3600/0/0").then(o => o.publicKey)
     */
    eth2GetPublicKey(path: any, boolDisplay: any): any;
    /**
     * Set the index of a Withdrawal key used as withdrawal credentials in an ETH 2 deposit contract call signature
     *
     * It shall be run before the ETH 2 deposit transaction is signed. If not called, the index is set to 0
     *
     * @param withdrawalIndex index path in the EIP 2334 path m/12381/3600/withdrawalIndex/0
     * @return True if the method was executed successfully
     */
    eth2SetWithdrawalIndex(withdrawalIndex: any): any;
}