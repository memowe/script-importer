export default class ScriptImporter {

    constructor(prefix = '') {
        this.prefix = prefix;
    }

    // Loads a given library via script element in a promise
    loadSingle(library) {
        return new Promise((resolve, reject) => {
            const script    = document.createElement('script');
            script.onload   = resolve;
            script.onerror  = reject;
            script.src      = this.prefix + library;
            document.body.appendChild(script);
        })
    }

    // Imports a variable amount of libraries given by URLs
    load(...libraries) {
        return libraries.reduce(
            (a, b) => a.then(() => this.loadSingle(b)),
        Promise.resolve());
    }
}
