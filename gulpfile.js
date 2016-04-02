var gulp = require('gulp'), concat, rename, uglify, jade, sourcemaps, watch, jshint, changed, ngAnnotate, stylus,
    nib, minifyHTML, cachebreaker, minifyCss, templateCache, mergeStream, size,
    htmlhint, connect;

var src = {
    stylesDirs: [
        './src/common_styles/**/*.styl',
        './src/**/*.styl',
        './index.styl'
    ],
    jadeDirs: {
        main: [
            './*.jade'
        ],
        templates: [
            './src/partials/**/*.jade',
            './src/modules/**/*.jade'
        ]
    },
    jsDirs: [
        './src/**/*.js',
        './index.js'
    ]
};

var dest = {
    dist: './dist'
};

gulp.task('lint', function () {
    jshint = jshint || require('gulp-jshint');

    return gulp.src(src.jsDirs)
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

gulp.task('htmlhint', function () {
    jade = jade || require('gulp-jade');
    htmlhint = htmlhint || require('gulp-htmlhint');
    var html = src.jadeDirs.templates.concat(src.jadeDirs.main);

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
    size = size || require('gulp-ize');

    return gulp.src([
        './dist/**/*.js',
        './dist/**/*.css'
    ]).pipe(size({showFiles: true, showTotal: true}));
});

function makeJade() {
    jade = jade || require('gulp-jade');
    changed = changed || require('gulp-changed');
    minifyHTML = minifyHTML || require('gulp-minify-html');
    templateCache = templateCache || require('gulp-angular-templatecache');

    return gulp.src(src.jadeDirs.templates)
        .pipe(changed(dest.dist, {extension: '.html'}))
        .pipe(jade({pretty: false}))
        // .pipe(minifyHTML({
        //     empty: true,
        //     spare: true
        // }))
        .pipe(templateCache({
            module: 'sp-io.templates',
            standalone: true
        }))
}

function makeJS() {
    concat = concat || require('gulp-concat');
    changed = changed || require('gulp-changed');
    ngAnnotate = ngAnnotate || require('gulp-ng-annotate');

    return gulp.src(src.jsDirs)
        .pipe(changed(dest.dist))
        .pipe(concat('app.js'))
        .pipe(ngAnnotate({remove: true, add: true, single_quotes: true}))
        ;
}

function mergeJS(templates, mainJs) {
    concat = concat || require('gulp-concat');
    rename = rename || require('gulp-rename');
    uglify = uglify || require('gulp-uglify');
    sourcemaps = sourcemaps || require('gulp-sourcemaps');
    mergeStream = mergeStream || require('merge-stream');

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
    jade = jade || require('gulp-jade');
    //minifyHTML = minifyHTML || require('gulp-minify-html');
    cachebreaker = cachebreaker || require('gulp-cache-breaker');

    return gulp.src(src.jadeDirs.main)
        .pipe(jade({pretty: false}))
        // .pipe(minifyHTML({
        //     empty: true,
        //     spare: true
        // }))
        //.pipe(cachebreaker())
        .pipe(gulp.dest('./'));
});

gulp.task('jade_and_js', function () {
    buildJS();
    gulp.start('jade_static_main');
});

gulp.task('stylus', function () {
    concat = concat || require('gulp-concat');
    //changed = changed || require('gulp-changed');
    stylus = stylus || require('gulp-stylus');
    nib = nib || require('nib');
    minifyCss = minifyCss || require('gulp-minify-css');

    return gulp.src(src.stylesDirs)
        //TODO (S.Panfilov) check changed
        //.pipe(changed(dest.dist))
        .pipe(concat('app.min.styl'))
        .pipe(stylus({use: [nib()], compress: true}))
        .pipe(minifyCss())
        .pipe(gulp.dest(dest.dist));
});

gulp.task('webserver', function () {
    connect = connect || require('gulp-connect');

    connect.server({
        root: [__dirname],
        port: 8001,
        livereload: true
    });
});

gulp.task('watch', function () {
    watch = watch || require('gulp-watch');

    gulp.watch(src.jadeDirs.main, ['jade_static_main']);
    gulp.watch(src.jadeDirs.templates, ['jade_static_templates']);

    gulp.watch(src.stylesDirs, ['stylus']);
    gulp.watch(src.jsDirs, ['js']);
});

gulp.task('build', function () {
    gulp.start('jade_and_js');
    gulp.start('stylus');
});

gulp.task('default', function () {
    gulp.start('build');
    gulp.start('watch');
});