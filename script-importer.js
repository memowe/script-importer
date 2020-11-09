export default class ScriptImporter {

    constructor(prefix = '') {
        this.prefix = prefix;
    }

    // Loads a given library via script element in a promise
    importSingle(library) {
        return new Promise((resolve, reject) => {
            const script    = document.createElement('script');
            script.onload   = resolve;
            script.onerror  = reject;
            script.src      = this.prefix + library;
            document.body.appendChild(script);
        })
    }

    // Works with an array of URLs or a simple URL given as string
    import(libraries = []) {
        if (typeof libraries === 'string')
            return this.importSingle(libraries);
        return libraries.reduce(
            (a, b) => a.then(() => this.importSingle(b)),
        Promise.resolve());
    }
}
