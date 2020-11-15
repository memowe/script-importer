export default class ScriptImporter {

    constructor(prefix = '') {
        this.prefix = prefix;
    }

    // Loads a given library via script element in a promise
    loadSingle(library) {
        const url = this.prefix + library;
        return new Promise((resolve, reject) => {
            const script    = document.createElement('script');
            script.onload   = () => resolve(url);
            script.onerror  = () => reject(url);
            script.src      = url;
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
        ).then(this.summarize);
    }

    // Convert a Promise.allSettled result to a loading summary
    summarize(res) {
        return {
            loaded: res.filter(r => r.status === 'fulfilled').map(r => r.value),
            failed: res.filter(r => r.status === 'rejected').map(r => r.reason),
        };
    }
}
