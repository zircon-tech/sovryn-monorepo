/// <reference types="node" />
import Transport from '@ledgerhq/hw-transport';
export declare const isLedgerDashboardName: (name: string) => boolean;
export declare function openLedgerApp(transport: Transport<any>, name: string): Promise<void>;
export declare function quitLedgerApp(transport: Transport<any>): Promise<void>;
export declare function getLedgerAppAndVersion(transport: Transport<any>): Promise<{
    name: string;
    version: string;
    flags: Buffer;
}>;
export declare function getLedgerAppList(transport: Transport<any>): Promise<{
    name: string;
    hash: string;
    hashCodeData: string;
    blocks: number;
    flags: number;
}[]>;
