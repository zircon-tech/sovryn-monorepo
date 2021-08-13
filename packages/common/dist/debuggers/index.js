import _debug from 'debug';
export function debug(namespace) {
    var error = _debug(namespace + ":error");
    var log = _debug("" + namespace);
    error.log = console.error.bind(console);
    log.log = console.info.bind(console);
    return {
        log: log,
        error: error,
    };
}
export default debug;
//# sourceMappingURL=index.js.map