# ScriptImporter

**Load non-module libraries in a clean module-like fashion.**

## Usage

When used in the browser, this module needs to be imported as a `module`, for example:

```html
<script type="module" src="./script-importer.js">
```

The class can take a URL prefix string (e. g. your favourite CDN) and import single or multiple modules at a time. Its `load` method returns a promise:

```javascript
// Initialize with jsdelivr
const si = new ScriptImporter('https://cdn.jsdelivr.net/npm/');

// Single library usage
si.load('foo-library').then(() => {
    workWithFoo();
});
```

Multiple library usage: just append arguments (loaded in parallel)

```javascript
si.load('foo-library', 'dist/bar-library.min.js').then(() => {
    // Everything is loaded
    workWithFoo();
    workWithBar();
});
```

Dependencies, that need to be loaded sequentially, can be connected via an array. In this example, bar-special is loaded when bar-base has finished loading:

```javascript
si.load('foo-library', ['bar-base', 'bar-special]).then(() => {
    // Everything is loaded
    workWithFoo();
    workWithBarSpecial();
});
```

Outside of loading sequences, load is tolerant to failures and reports them together with loaded classes in a combined results object:

```javascript
{
    loaded: [urls],
    failed: [urls]
}
```

So loading errors can be reported easily:

```javascript
si.load(...).then(results => {
    results.failed.forEach(lib => console.log("Couldn't load " + lib));
    ...
});
```

See [example.html][example] for a markdown example.

## Load via CDN

This module is accessible via GitHub Pages and jsDelivr:

- [GitHub Pages][ghp] (only the latest version on `main` branch)
- jsDelivr CDN (cached and auto-minified): [/gh/memowe/script-importer@**tag**/script-importer.js][jsd]
    - [List of tags][sitags]
    - auto-minified: [.../script-importer.min.js][jsdmin]
    - It [should][jsdgh] be possible to use it with `@latest` or even without that `@`. Sometimes it [doesn't][jsdbug].

## Contributors

- [\@devolt5][devolt5]
- [\@memowe][mgh]

Original author: [\@memowe][mgh]

## License

Copyright (c) [Mirko Westermeier][mirko] ([\@memowe][mgh], [mirko@westermeier.de][mmail])

Released under the MIT (X11) license. See [LICENSE][mit] for details.

[example]: example.html
[ghp]: https://memowe.github.io/script-importer/script-importer.js
[jsd]: https://cdn.jsdelivr.net/gh/memowe/script-importer@v0.3/script-importer.js
[sitags]: https://github.com/memowe/script-importer/tags
[jsdmin]: https://cdn.jsdelivr.net/gh/memowe/script-importer@v0.3/script-importer.min.js
[jsdgh]: https://www.jsdelivr.com/?docs=gh
[jsdbug]: https://github.com/jsdelivr/jsdelivr/issues/18216
[devolt5]: https://github.com/devolt5
[mgh]: https://github.com/memowe
[mirko]: https://mirko.westermeier.de
[mmail]: mailto:mirko@westermeier.de
[mit]: LICENSE
