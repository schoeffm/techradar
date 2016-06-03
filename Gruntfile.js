module.exports = function (grunt) {

    var radarName = grunt.option('radar') || 'demo';
    var distDir = 'radars/'+radarName+'/dist';

    console.log("\nBuilding site for radar: "+radarName+"\n");

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        scss_sources: ['app/sass/techradar.scss', 'radars/'+radarName+'/sass/radar.scss' ],
        js_view_sources: ['app/javascript/init.js', 'app/javascript/techradar.js' , 'radars/'+radarName+'/javascript/*.js'],
        image_sources: ['app/images/*', 'radars/'+radarName+'/images/*'],
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
        js_destination: distDir+'/js',
        css_destination: distDir+'/css',
        img_destination: distDir+'/images/',
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
                src: ['<%= css_libs %>', '<%= css_destination %>/*.css'],
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
            js: {//For javascript changes
                files: ['<%= js_view_sources %>', 'radars/*.js'],
                tasks: [ 'jshint', 'concat'],
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
                src: '<%= scss_sources %>',
                expand: true,
                flatten: true,
                ext: '.css',
                dest: '<%= css_destination %>'
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
                flatten: true,
                expand: true,
                dest: '<%= img_destination %>',
                src: '<%= image_sources %>'
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
        clean: [distDir]
    });

    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-mocha');
    grunt.loadNpmTasks('grunt-mocha-phantomjs');

    grunt.registerTask('watchRadar', ['watch:radar']);
    grunt.registerTask('watchAll', ['watch:all']);
    grunt.registerTask('dev', ['sass', 'jshint', 'concat', 'copy', 'watch:js']);
    grunt.registerTask('default', ['sass', 'jshint', 'mocha_phantomjs', 'concat', 'uglify', 'copy']);
};
