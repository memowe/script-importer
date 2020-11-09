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

## Author and license

Copyright (c) [Mirko Westermeier][mirko] ([\@memowe][mgh], [mirko@westermeier.de][mmail])

Released under the MIT (X11) license. See [LICENSE][mit] for details.

[example]: example.html
[mirko]: http://mirko.westermeier.de
[mgh]: https://github.com/memowe
[mmail]: mailto:mirko@westermeier.de
[mit]: LICENSE
