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

    // Imports a variable amount of libraries given by URLs one after another
    loadSequential(...libraries) {
        return libraries.reduce(
            (a, b) => a.then(() => this.loadSingle(b)),
        Promise.resolve());
    }

    // Main method: load a single URL or an array of single URLs
    // or an array of sequential dependency URLs
    load(...libraries) {
        return Promise.allSettled(
            libraries.map(libs => {
                if (typeof libs === 'string') libs = [libs];
                return this.loadSequential(...libs)
            })
        );
    }
}
