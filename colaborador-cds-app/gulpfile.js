var es = require('event-stream');
var gulp = require('gulp');
var concat = require('gulp-concat');
var connect = require('gulp-connect');
var templateCache = require('gulp-angular-templatecache');
var ngAnnotate = require('gulp-ng-annotate');
var uglify = require('gulp-uglify');
var less = require('gulp-less');
var fs = require('fs');
var _ = require('lodash');
var $ = require('gulp-load-plugins')();
var gulpNgConfig = require('gulp-ng-config');
var rename = require('gulp-rename');

var scripts = require('./app.scripts.json');

var source = {
    js: {
        main: 'app/main.js',
        src: [
            // application config
            'app.config.js',

            // application bootstrap file
            'app/main.js',

            // main module
            'app/app.js',

            // module files
            'app/**/module.js',

            // other js files [controllers, services, etc.]
            'app/**/!(module)*.js'
        ],
        tpl: 'app/**/*.html'
    }
};

var destinations = {
    compiled: 'build',
    stylecompiled: 'build/styles',
    images: 'build/img',
    fonts: 'build/fonts',
    css: 'build/css'
};

gulp.task('build', function () {
    return es.merge(gulp.src(source.js.src), getTemplateStream())
        .pipe(ngAnnotate())
//        .pipe(uglify())
        .pipe(concat('app.js'))
        .pipe(gulp.dest(destinations.compiled));
});

gulp.task('js', function () {
    console.log(">>>> task JS <<<<<");
    return es.merge(gulp.src(source.js.src), getTemplateStream())
        .pipe(concat('app.js'))
        .pipe(gulp.dest(destinations.compiled));
});

gulp.task('images', function () {
    console.log(">>>> task IMAGES <<<<<");
    return gulp.src('styles/img/**/*')
        .pipe(gulp.dest(destinations.images));
});

gulp.task('fonts', function () {
    console.log(">>>> task FONTS <<<<<");
    return gulp.src('styles/fonts/**/*')
        .pipe(gulp.dest(destinations.fonts));
});

gulp.task('css', function () {
    console.log(">>>> task CSS <<<<<");
    return gulp.src('styles/css/**/*')
        .pipe(gulp.dest(destinations.css));
});


gulp.task('watch', ['connect'], function () {
    $.livereload.listen();

    gulp.watch(source.js.src, ['js']);
    gulp.watch(source.js.tpl, ['js']);

});

gulp.task('wiredep', function () {
    var wiredep = require('wiredep').stream;
    var exclude = [
        'bootstrap',
        'jquery',
        'es5-shim',
        'json3',
        'angular-scenario'
    ];

    gulp.src('app/*.html')
        .pipe(wiredep({exclude: exclude}))
        .pipe(gulp.dest('app'));

    gulp.src('test/*.js')
        .pipe(wiredep({exclude: exclude, devDependencies: true}))
        .pipe(gulp.dest('test'));
});

gulp.task('connect', function () {
    connect.server({
        port: 8888,
        middleware: function (connect, o) {
            return [(function () {
                var url = require('url');
                var proxy = require('proxy-middleware');
                var options = url.parse('http://localhost:8080/rest');
                options.route = '/rest';
                return proxy(options);
            })()];
        }
    });
});

gulp.task('vendor', function () {
    _.forIn(scripts.chunks, function (chunkScripts, chunkName) {
        var paths = [];
        chunkScripts.forEach(function (script) {
            var scriptFileName = scripts.paths[script];

            if (!fs.existsSync(__dirname + '/' + scriptFileName)) {

                throw console.error('Required path doesn\'t exist: ' + __dirname + '/' + scriptFileName, script)
            }
            paths.push(scriptFileName);
        });

        gulp.src(paths)
            .pipe(concat(chunkName + '.js'))
            .pipe(gulp.dest(destinations.compiled));

    })

});

 gulp.task('producao', [], function () {
       gulp.src('ambiente.config.json')
       .pipe(gulpNgConfig('app.core.ambiente', {
           environment: 'producao'
         }))
       .pipe(rename('module.js'))
       .pipe(gulp.dest('app/core/ambiente'))
 });
 
 gulp.task('desenvolvimento', [], function () {
       gulp.src('ambiente.config.json')
       .pipe(gulpNgConfig('app.core.ambiente', {
           environment: 'desenvolvimento'
         }))
       .pipe(rename('module.js'))
       .pipe(gulp.dest('app/core/ambiente'))
 });
 
 gulp.task('appConfig', [], function () {
       gulp.src('app.config.json')
       .pipe(gulpNgConfig('app.core.config', {
           environment: 'configurarAplicacao'
         }))
       .pipe(rename('module.js'))
       .pipe(gulp.dest('app/core/configurar'))
 });
 
gulp.task('prep', ['appConfig', 'images', 'fonts', 'css']);
gulp.task('prod', ['producao', 'prep', 'vendor', 'build']);
gulp.task('dev', ['desenvolvimento', 'prep', 'wiredep', 'vendor', 'js', 'watch', 'connect']);
gulp.task('default', ['dev']);

var swallowError = function (error) {
    console.log(error.toString());
    this.emit('end')
};

var getTemplateStream = function () {
    return gulp.src(source.js.tpl)
        .pipe(templateCache({
            root: 'app/',
            module: 'app'
        }))
};