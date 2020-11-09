# ScriptImporter

**Load non-module libraries in a clean module-like fashion.**

## Usage

When used in the browser, this module needs to be imported as a `module`, for example:

```html
<script type="module" src="./script-importer.js">
```

The class can take a `prefix` string (e. g. your favourite CDN) and import single or multiple modules at a time. Its `import` method returns a promise:

```javascript
// Initialize with jsdelivr
const si = new ScriptImporter('https://cdn.jsdelivr.net/npm/');

// Single library usage
si.import('foo-library').then(() => {
    workWithFoo();
});

// Multiple library usage
const deps = ['foo-library', 'dist/bar-library.min.js'];
si.import(deps).then(() => {
    // Everything is loaded
    workWithFoo();
    workWithBar();
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

## Author and license

Copyright (c) [Mirko Westermeier][mirko] ([\@memowe][mgh], [mirko@westermeier.de][mmail])

Released under the MIT (X11) license. See [LICENSE][mit] for details.

[example]: example.html
[ghp]: https://memowe.github.io/script-importer/script-importer.js
[jsd]: https://cdn.jsdelivr.net/gh/memowe/script-importer@v0.1/script-importer.js
[sitags]: https://github.com/memowe/script-importer/tags
[jsdmin]: https://cdn.jsdelivr.net/gh/memowe/script-importer@v0.1/script-importer.min.js
[jsdgh]: https://www.jsdelivr.com/?docs=gh
[jsdbug]: https://github.com/jsdelivr/jsdelivr/issues/18216
[mirko]: http://mirko.westermeier.de
[mgh]: https://github.com/memowe
[mmail]: mailto:mirko@westermeier.de
[mit]: LICENSE