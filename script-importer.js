export default class ScriptImporter {

    constructor(prefix = '') {
        this.prefix = prefix;
    }

    // Loads a given library via script element in a promise
    importSingle(library) {
        console.log('prefix: ' + this.prefix);
        console.log('library: ' + library);
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
        return Promise.all(libraries.map(l => this.importSingle(l)));
    }
}
