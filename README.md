grunt-connect-page
==================

Example/template to get you started with grunt, browserify, connect, file watch, and livereload.

### How to get started

```
$ git clone https://github.com/MiguelCastillo/grunt-connect-page
$ npm install
$ grunt serve
```

And in the browser, go to <a target="_blank" href="http://localhost:8989">http://localhost:8989</a>


### Setting this up from scratch

- Setup your package.json

```
$ npm init
$ npm install --save-dev grunt
$ npm install --save-dev grunt-browserify
$ npm install --save-dev grunt-concurrent
$ npm install --save-dev grunt-contrib-connect
$ npm install --save-dev grunt-contrib-watch
```

- Setup your <a href="https://github.com/MiguelCastillo/grunt-connect-page/blob/master/Gruntfile.js">Gruntfile.js</a>. Below is the important part from the gruntfile.js.  NOTE: `keepalive` flag is to keep the server running.

#### Tasks

```
$ grunt serve
```
Startup the server via grunt, and automatically compile and refresh the browser upon file changes

```
$ grunt build
```

Compiles all the JavaScript source file in the `src` directory.


#### List of resources
There are lots of Grunt tasks out there, but here are the ones I most frequently use.

- [grunt watch](https://github.com/gruntjs/grunt-contrib-watch) - Watches your files for changes
- [grunt connect](https://github.com/gruntjs/grunt-contrib-connect) - Serves up static content
- [grunt browserify](https://github.com/jmreidy/grunt-browserify) - Compiles/Bundles JavaScript
- [grunt concurrent](https://github.com/sindresorhus/grunt-concurrent) - Run multiple tasks concurrently
- [grunt jshint](https://github.com/gruntjs/grunt-contrib-jshint) - Lint you source file; static analisys
- [grunt release](https://github.com/geddski/grunt-release) - Updates package.json, publishes to github and npm
- [grunt uglify](https://github.com/gruntjs/grunt-contrib-uglify) - Minifies JavaScript ans generates source maps
