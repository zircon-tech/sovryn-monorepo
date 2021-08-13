import { bufferToInt } from 'ethereumjs-util';
export function padLeftEven(hex) {
    hex = hex.length % 2 !== 0 ? '0' + hex : hex;
    return hex;
}
export function sanitizeHex(hex) {
    hex = hex.substring(0, 2) === '0x' ? hex.substring(2) : hex;
    if (hex === '')
        return '';
    return '0x' + padLeftEven(hex);
}
export function bufferToHex(buffer) {
    return '0x' + buffer.toString('hex');
}
export function getBufferFromHex(hex) {
    hex = sanitizeHex(hex);
    var _hex = hex.toLowerCase().replace('0x', '');
    return Buffer.from(_hex, 'hex');
}
export function calculateChainIdFromV(v) {
    var sigV = bufferToInt(v);
    var chainId = Math.floor((sigV - 35) / 2);
    if (chainId < 0)
        chainId = 0;
    return chainId;
}
//# sourceMappingURL=sanitizer.js.map