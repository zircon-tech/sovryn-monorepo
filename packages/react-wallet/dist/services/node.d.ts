import Web3 from 'web3';
export declare class Node {
    readonly nodes: Map<number, Web3>;
    getBalance(chainId: number, address: string): Promise<string>;
    get(chainId: number): Web3 | undefined;
}
export declare const nodeService: Node;
