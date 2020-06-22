## Introduction

The plugin `SplitChunksPlugin` was introduced in webpack 4 as a replacement for the `CommonsChunkPlugin` to allow further optimization.
This plugin takes the shared modules between multiple entry points (applications) and creates separate files for them (chunks), allowing store this chunks in cache for later use instead of requesting again the shared modules.
This results in page speed optimizations as the browser can quickly serve the shared code from cache rather than being forced to request again that code.

*Note: from what I could find the reasons for the replacement were (besides general improvements),
more code being downloaded than needed, inefficient on async chunks and difficult to use.*

## Chunks options “async”, “initial” and “all”
Depending on the chunks option selected, the optimization is going to be apply to static import modules (initial), dynamic import modules(async) or to both (all).

*Note dynamic import: The `import(module)` expression loads a module and returns a promise that resolves into a module object, and can be used in any place of the code e.g import a module on-demand or conditionally.*

## How does it work?

## Setup for our basic app.
- Create a new directory for our basic app e.g cd Documents => mkdir fe-learning-session cd fe-learning-session
- Now in the terminal run the following command `npm init` and install the following dependencies
- `npm install --save-dev webpack`
- `npm install --save-dev webpack-cli`
- `npm install jquery`
- Add a script in the `package.json` file to run `webpack` with `npm run build`
- In the root create a directory called `dist` and a file called `webpack.config.js`
- Also in the root create two files called `A.js` and `B.js`
- Inside the `dist` directory create two html files called `A.html` and `B.html`

## Lets first try it without the split chunks
- Add a basic configuration the the file `webpack.config.js`
- Add some js using jquery to the files `A.js` and `B.js`
- Finally import the webpack bundles in the html files
