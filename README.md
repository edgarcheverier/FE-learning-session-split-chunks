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

We will create two basic web pages, so we will have two entry points, and then we will try webpack with and without the `SplitChunksPlugin` plugin.
If you want to follow this part by doing:
- Create a new directory for our basic app e.g cd Documents => `mkdir fe-learning-session` `cd fe-learning-session`
- Clone the testing app `git clone git@github.com:edgarcheverier/FE-learning-session-split-chunks.git`
- run `npm install` this will install the following dependency `jquery` and dev dependencies `webpack` and `webpack-cli`
