module.exports = function(grunt) {

    var date = grunt.template.today('yyyy-mm-dd');
    var sourceBanner = '/* \n'                                                                             +
        '* !<%= pkg.name %> v<%= pkg.version %> built '+ date +'  | Pulse HTML5 plugin for JW7\n' +
        '* Copyright (c) <%= grunt.template.today("yyyy") %> by INVIDI, www.invidi.com \n'  +
        '*/ \n';

    // Load the plugin tasks we need
    [
        "grunt-contrib-uglify",
        "grunt-contrib-copy",
        "grunt-contrib-clean"
    ].forEach(grunt.loadNpmTasks);

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        clean: {
          build: {
              src: ['dist']
          }
        },
        //Copy the JS to dist
        copy: {
            bridge: {
                src: 'src/*.js',
                dest: 'dist/<%= pkg.name %>-<%= pkg.version %>.js'
            }
        },
        //Minify
        uglify: {
            bridge: {
                options: {
                    banner: sourceBanner,
                    mangle: {
                        reserved: ['error', 'format', 'request', 'model', 'parse', 'core', 'window', 'document', 'console']
                    }
                },
                files: {
                    'dist/<%= pkg.name %>-<%= pkg.version %>.min.js': ['<%= copy.bridge.dest %>' ]
                }
            },
        },
    });

    grunt.registerTask('default', ['clean', 'copy', 'uglify']);
};
