module.exports = function (grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        // order matters (concatenation respects order and that order is relevant during parsing)
        scss_sources: ['app/sass/techradar.scss', 'app/sass/quadrants.scss'],
        js_view_sources: ['app/javascript/init.js', 'app/javascript/techradar.js'],
        images_source_dir: 'app/images',
        tests: ['test/javascript/**/*js'],
        css_libs: [],
        view_libs: [
            'bower_components/jquery/dist/jquery.min.js',
            'bower_components/jquery-color/jquery.color.js',
            'bower_components/d3/d3.min.js',
            'bower_components/lodash/lodash.min.js',
            'bower_components/underscore/underscore-min.js',
            'bower_components/ericmmartin.simplemodal/src/jquery.simplemodal.js'
        ],
        js_destination: 'dist/js',
        css_destination: 'dist/css',
        img_destination: 'dist/images',
        jshint: {
            task: {
                src: ['<%= js_view_sources %>'],
                dest: '<%= js_destination %>'
            },
            options: {
                jshintrc: '.jshintrc',
                force: true            // just report bugs - don't break the build 
            }
        },
        uglify: {
            view: {
                src: ['<%= js_destination %>/<%= pkg.name %>.combined.js'],
                dest: '<%= js_destination %>/<%= pkg.name %>.min.js'
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
                dest: '<%= js_destination %>/<%= pkg.name %>.combined.js'
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
            all: {//This is default task
                files: ['<%= js_view_sources %>', '<%= tests %>', '<%= scss_sources %>', 'radars/*.js'],
                tasks: ['sass', 'jshint', 'mocha_phantomjs', 'concat'],
            options: {
                'spawn': true,
                'interrupt': false,
                'debounceDelay': 500,
                'interval': 50,
                'event': 'all',
                'reload': false,
                'forever': true,
                'dateFormat': null,
                'atBegin': false,
                'livereload': true,
                'cwd': process.cwd(),
                'livereloadOnError': true
            }
        },
            radar: {//Can be used when only radar file changes to speed up reloads
                files: ['radars/*.js'],
                options: {
                    'spawn': true,
                    'interrupt': false,
                    'debounceDelay': 500,
                    'interval': 50,
                    'event': 'all',
                    'reload': false,
                    'forever': true,
                    'dateFormat': null,
                    'atBegin': false,
                    'livereload': true,
                    'cwd': process.cwd(),
                    'livereloadOnError': true
                }
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
        //Copy images
        copy: {
            files: {
                expand: true,
                dot: true,
                cwd: '<%= images_source_dir %>',
                dest: '<%= img_destination %>',
                src: '**/*'
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
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-mocha');
    grunt.loadNpmTasks('grunt-mocha-phantomjs');

    grunt.registerTask('watchRadar', ['watch:radar']);
    grunt.registerTask('watchAll', ['watch:all']);
    grunt.registerTask('dev', ['sass', 'jshint', 'concat', 'watch', 'copy']);
    grunt.registerTask('default', ['sass', 'jshint', 'mocha_phantomjs', 'concat', 'uglify', 'copy']);
};
