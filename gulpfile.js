var gulp = require('gulp');
var concat = require('gulp-concat');
var rename = require('gulp-rename');
var uglify = require('gulp-uglify');
var jade = require('gulp-jade');
var sourcemaps = require('gulp-sourcemaps');
var watch = require('gulp-watch');
var jshint = require('gulp-jshint');
var changed = require('gulp-changed');
var ngAnnotate = require('gulp-ng-annotate');
var stylus = require('gulp-stylus');
var nib = require('nib');
var minifyHTML = require('gulp-minify-html');
var cachebreaker = require('gulp-cache-breaker');
var concatVendorCss = require('gulp-concat-css');
var minifyCss = require('gulp-minify-css');
var templateCache = require('gulp-angular-templatecache');
var mergeStream = require('merge-stream');
var purify = require('purify-css');
var size = require('gulp-filesize');
var fs = require('fs');
var complexity = require('gulp-complexity');
var jsinspect = require('gulp-jsinspect');
var buddyjs = require('gulp-buddy.js');
var htmlhint = require('gulp-htmlhint');
var sitemap = require('gulp-sitemap');
var connect = require('gulp-connect');

var src = {
    stylesDirs: [
        './src/common_styles/**/*.styl',
        './src/**/*.styl'
    ],
    jade: {
        main: [
            './*.jade'
        ],
        templates: [
            './src/pages/**/*.jade',
            './src/partials/**/*.jade',
            './src/modules/**/*.jade'
        ]
    },
    jsDir: './src/**/*.js'
};

var dest = {
    dist: './dist'
};

gulp.task('sitemap', function () {
    gulp.src(['./*.html'])
        .pipe(sitemap({
            siteUrl: 'se-panfilov.github.io'
        }))
        .pipe(gulp.dest('./'));
});

gulp.task('lint', function () {
    return gulp.src(src.jsDir)
        .pipe(jshint({
            globalstrict: true,
            strict: false,
            globals: {
                angular: true,
                console: true
            }
        }))
        .pipe(jshint.reporter('jshint-stylish'));
});

gulp.task('complexity', function () {
    return gulp.src(src.jsDir)
        .pipe(complexity());
});

gulp.task('inspect', function () {
    return gulp.src(src.jsDir)
        .pipe(jsinspect());
});

gulp.task('magic_numbers', function () {
    return gulp.src(src.jsDir)
        .pipe(buddyjs({
            ignore: [0, 1, 2],
            reporter: 'detailed'
        }));
});

gulp.task('htmlhint', function () {
    var html = src.jade.templates.concat(src.jade.main);
    return gulp.src(html)
        .pipe(jade({pretty: false}))
        .pipe(htmlhint({
            "tagname-lowercase": true,
            "attr-lowercase": true,
            "attr-value-double-quotes": true,
            "doctype-first": false,
            "tag-pair": true,
            "spec-char-escape": true,
            "id-unique": true,
            "src-not-empty": true,
            "attr-no-duplication": true
        }))
        .pipe(htmlhint.reporter())
});

gulp.task('sizes_dist', function () {
    return gulp.src([
        './dist/**/*.js',
        './dist/**/*.css'
    ]).pipe(size());
});

gulp.task('sizes_libs', function () {
    return gulp.src([
        './bower_components/**/*.js',
        './bower_components/**/*.css'
    ]).pipe(size());
});

function makeJade() {
    return gulp.src(src.jade.templates)
        //TODO (S.Panfilov) check with changed pipe
        .pipe(changed(dest.dist, {extension: '.html'}))
        .pipe(jade({pretty: false}))
        .on('error', console.log)
        .pipe(minifyHTML({
            empty: true,
            spare: true
        }))
        .pipe(templateCache({
            module: 'sp-io.templates',
            standalone: true
        }))
}

function makeJS() {
    return gulp.src([src.jsDir])
        .pipe(changed(dest.dist))
        .pipe(concat('app.js'))
        .pipe(ngAnnotate({remove: true, add: true, single_quotes: true}))
        ;
}

function mergeJS(templates, mainJs) {
    return mergeStream(templates, mainJs)
        .pipe(concat('app.js'))
        .pipe(gulp.dest(dest.dist))
        .pipe(sourcemaps.init())
        .pipe(uglify())
        .pipe(rename({basename: 'app.min'}))
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest(dest.dist))
}

function buildJS() {
    var templates = makeJade();
    var mainJs = makeJS();
    return mergeJS(templates, mainJs);
}


gulp.task('js', function () {
    buildJS();
});

gulp.task('jade_static_templates', function () {
    gulp.start('js');
});

gulp.task('jade_static_main', function () {
    return gulp.src(src.jade.main)
        .pipe(jade({pretty: false}))
        .on('error', console.log)
        .pipe(minifyHTML({
            empty: true,
            spare: true
        }))
        .pipe(cachebreaker())
        .on('error', console.log)
        .pipe(gulp.dest('./'));
});

gulp.task('jade_and_js', function () {
    buildJS();
    gulp.start('jade_static_main');
});

gulp.task('stylus', function () {
    return gulp.src(src.stylesDirs)
        //TODO (S.Panfilov) check changed
        //.pipe(changed(dest.dist))
        .pipe(concat('app.min.styl'))
        .pipe(stylus({use: [nib()], compress: true}))
        .pipe(minifyCss())
        .pipe(gulp.dest(dest.dist));
});

gulp.task('purify_css', function () {
    return purifyCss({
        src: ['./index.html', './dist/app.min.js', './dist/vendor.min.js'],
        css: ['./dist/vendor.min.css'],
        output: './dist/vendor.purified.min.css'
    });
});

function purifyCss(settings) {
    var pure = purify(settings.src, settings.css, {write: false, info: true});

    fs.writeFile(settings.output, pure, function (err) {
        if (err) return err;
    });
}

gulp.task('vendor_js', function () {
    return gulp.src([
        './bower_components/jquery/dist/jquery.js',
        './bower_components/angular/angular.min.js',
        './bower_components/angular-animate/angular-animate.min.js',
        './bower_components/angular-bootstrap/ui-bootstrap-tpls.min.js',
        './bower_components/angular-loading-bar/build/loading-bar.min.js',
        './bower_components/angular-ui-router/release/angular-ui-router.min.js',
        './bower_components/angular-ui-router-anim-in-out/anim-in-out.js'

    ])
        .pipe(concat('vendor.js'))
        .pipe(gulp.dest(dest.dist))
        .pipe(sourcemaps.init())
        .pipe(uglify())
        .pipe(rename({basename: 'vendor.min'}))
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest(dest.dist))
});

gulp.task('vendor_css', function () {
    gulp.src([
        './bower_components/bootstrap/dist/css/bootstrap.min.css',
        './bower_components/angular-ui-router-anim-in-out/css/anim-in-out.css',
        './bower_components/angular-loading-bar/build/loading-bar.min.css'
    ], {base: './dist'})
        .pipe(concatVendorCss('vendor.min.css'))
        .pipe(minifyCss())
        .pipe(gulp.dest(dest.dist));
});

gulp.task('webserver', function () {
    connect.server({
        //root: [__dirname],
        port: 8001,
        livereload: true
    });
});

gulp.task('watch', function () {
    gulp.watch(src.jade.main, ['jade_static_main']);
    gulp.watch(src.jade.templates, ['jade_static_templates']);

    gulp.watch(src.stylesDirs, ['stylus']);
    gulp.watch([src.jsDir], ['js']);
});

gulp.task('build_vendor', function () {
    gulp.start('vendor_js');
    gulp.start('vendor_css');
    gulp.start('purify_css');
});

gulp.task('build', function () {
    gulp.start('jade_and_js');
    gulp.start('stylus');
    gulp.start('purify_css');
    gulp.start('sitemap');
});

gulp.task('default', function () {
    gulp.start('build');
    gulp.start('watch');
});