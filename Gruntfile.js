module.exports = function (grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        // order matters (concatenation respects order and that order is relevant during parsing)
        scss_sources: ['app/sass/techradar.scss'],
        js_view_sources: ['app/javascript/init.js', 'app/javascript/techradar.js'],
        tests: ['test/javascript/**/*js'],
        css_libs: [],
        view_libs: [
            'bower_components/d3/d3.min.js',
            'bower_components/lodash/lodash.min.js',
            'bower_components/underscore/underscore-min.js',
            'bower_components/ericmmartin.simplemodal/src/jquery.simplemodal.js'
        ],
        destination: 'dist/js',
        css_destination: 'dist/css',
        jshint: {
            task: {
                src: ['<%= js_view_sources %>'],
                dest: '<%= destination %>'
            },
            options: {
                jshintrc: '.jshintrc',
                force: true            // just report bugs - don't break the build 
            }
        },
        uglify: {
            view: {
                src: ['<%= destination %>/<%= pkg.name %>.combined.js'],
                dest: '<%= destination %>/<%= pkg.name %>.min.js'
            },
            options: {
                'mangle': {},
                'compress': {},
                'beautify': false,
                'expression': false,
                'report': 'min',
                'sourceMap': false,
                'sourceMapName': undefined,
                'sourceMapIn': undefined,
                'sourceMapIncludeSources': false,
                'enclose': undefined,
                'wrap': undefined,
                'exportAll': false,
                'preserveComments': undefined,
                'banner': '',
                'footer': ''
            }
        },
        concat: {
            css_view: {
                src: ['<%= css_libs %>', '<%= css_destination %>/<%= pkg.name %>.view.css'],
                dest: '<%= css_destination %>/<%= pkg.name %>.view.combined.css'
            },
            view: {
                src: ['<%= view_libs %>', '<%= js_view_sources %>'],
                dest: '<%= destination %>/<%= pkg.name %>.combined.js'
            },
            options: {
                'separator': grunt.util.linefeed,
                'banner': '',
                'footer': '',
                'stripBanners': false,
                'process': false,
                'sourceMap': false,
                'sourceMapName': undefined,
                'sourceMapStyle': 'embed'
            }
        },
        watch: {
            task: {
                files: ['<%= js_view_sources %>', '<%= tests %>', '<%= scss_sources %>'],
                tasks: ['sass', 'jshint', 'mocha_phantomjs', 'concat']

            },
            options: {
                'spawn': true,
                'interrupt': false,
                'debounceDelay': 500,
                'interval': 100,
                'event': 'all',
                'reload': false,
                'forever': true,
                'dateFormat': null,
                'atBegin': false,
                'livereload': false,
                'cwd': process.cwd(),
                'livereloadOnError': true
            }
        },
        sass: {
            view: {
                src: ['app/sass/techradar.scss'],
                dest: '<%= css_destination %>/<%= pkg.name %>.view.css'
            },
            options: {
                'trace': false,
                'unixNewlines': false,
                'check': false,
                'style': 'nested',
                'precision': 3,
                'quiet': false,
                'compass': false,
                'debugInfo': false,
                'lineNumbers': false,
                'loadPath': [],
                'require': [],
                'cacheLocation': '.sass-cache',
                'noCache': false,
                'bundleExec': false,
                'update': false
            }
        },
        mocha_phantomjs: {
            all: ['src/test/javascript/**/*.html']
        },
        mocha: {
            test: {
                src: ['src/test/javascript/**/*.html']
            }
        },
        apidoc: {
            myapp: {
                src: "app/",
                dest: "apidoc/"
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-mocha');
    grunt.loadNpmTasks('grunt-mocha-phantomjs');

    grunt.registerTask('dev', ['sass', 'jshint', 'concat', 'watch']);
    grunt.registerTask('default', ['sass', 'jshint', 'mocha_phantomjs', 'concat', 'uglify']);
};
