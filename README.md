grunt-connect-page
==================

Simple example/template to demonstrate how to quickly setup a server for your static content.  The server is <a href="https://github.com/senchalabs/connect">connect</a> and the grunt task is <a href="https://github.com/gruntjs/grunt-contrib-connect">grunt-contrib-connect</a>.

### How start the server

```
$ git clone https://github.com/MiguelCastillo/grunt-connect-page
$ npm install
$ npm start
```

And in the browser, go to <a target="_blank" href="http://localhost:8989">http://localhost:8989</a>


### Setting this up from scratch

- Setup your package.json

```
$ npm init
$ npm install grunt --save-dev
$ npm install grunt-contrib-connect --save-dev
```

- Setup your <a href="https://github.com/MiguelCastillo/grunt-connect-page/blob/master/Gruntfile.js">Gruntfile.js</a>. Below is the important part from the gruntfile.js.  NOTE: `keepalive` flag is to keep the server running.
```javascript
connect: {
  keepalive: {
    options: {
      port: 8989,
      host: "*",
      keepalive: true
    }
  }
}
```

- Startup the server via grunt
```
$ grunt start
```
