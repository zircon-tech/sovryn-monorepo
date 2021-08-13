/// <reference types="bn.js" />
import { TransactionConfig } from 'web3-core';
import Common from 'ethereumjs-common';
import { RawTransactionData } from '../interfaces/wallet.interface';
export declare function prepareHardwareTransaction(t: TransactionConfig): {
    nonce: number;
    gasLimit: string | number | undefined;
    to?: string | undefined;
    value?: string | number | import("bn.js") | undefined;
    gasPrice?: string | number | import("bn.js") | undefined;
    data?: string | undefined;
    chainId?: number | undefined;
    common?: import("web3-core").Common | undefined;
    chain?: string | undefined;
    hardfork?: string | undefined;
};
export declare function commonGenerator(tx: RawTransactionData): Common;
