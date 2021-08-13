export declare function base64Encode(string: string): string;
export declare function base64Decode(string: string): string;
export declare const isMobile: {
    Android: () => RegExpMatchArray | null;
    BlackBerry: () => RegExpMatchArray | null;
    iOS: () => RegExpMatchArray | null;
    Opera: () => RegExpMatchArray | null;
    Windows: () => RegExpMatchArray | null;
    any: () => RegExpMatchArray | null;
};
