Version history of script-importer.js
=====================================

- v0.3 (2020-11-15)
    - API change: Rename "import" method to "load"
    - API change: Get URLs from method parameters instead of an array
    - Enable both parallel and chained loading (@devolt5)
    - Add a loading result object for error handling

- v0.2 (2020-11-09)
    - Loading from an array in sequence by promise chaining

- v0.1 (2020-11-09)
    - First usable version
    - Loading from an array of URL strings in parallel
