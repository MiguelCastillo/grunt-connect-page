//
// http://24ways.org/2013/grunt-is-not-weird-and-hard/
//
module.exports = function(grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON("package.json"),
    "connect": {
      keepalive: {
        options: {
          port: 8989,
          host: "localhost",
          keepalive: true,
          open: "http://localhost:8989/index.html",
          livereload: true
        }
      }
    },
    "concurrent": {
      "build": {
        tasks: ["connect:keepalive", "watch:build"],
        options: {
          logConcurrentOutput: true
        }
      }
    },
    "watch": {
      "build": {
        files: ["src/**/*.js", "*.js"],
        tasks: ["build"],
        options: {
          livereload: true
        }
      }
    },
    "browserify": {
      "build": {
        src: ["src/<%= pkg.name %>.js"],
        dest: "dist/<%= pkg.name %>.js",
        options: {
          browserifyOptions: {
            "detectGlobals": false,
            "standalone": "connectpage"
          }
        }
      }
    }
  });


  //
  // Register modules
  //
  grunt.loadNpmTasks("grunt-contrib-connect");
  grunt.loadNpmTasks("grunt-contrib-watch");
  grunt.loadNpmTasks("grunt-concurrent");
  grunt.loadNpmTasks("grunt-browserify");


  //
  // Register tasks
  //
  grunt.registerTask("serve", ["concurrent:build"]);
  grunt.registerTask("build", ["browserify:build"]);
};
