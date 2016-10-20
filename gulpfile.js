var gulp = require('gulp'), concat, jade, watch, jshint, stylus,
    nib, minifyHTML, cachebreaker, minifyCss, size,
    htmlhint, connect;

var src = {
    stylesDirs: [
        './index.styl'
    ],
    jadeDirs: {
        main: [
            './*.jade'
        ]
    },
    jsDirs: [
        './index.js'
    ]
};

var dest = {
    dist: './'
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

gulp.task('sizes_dist', function () {
    size = size || require('gulp-filesize');

    return gulp.src([
        './dist/**/*.js',
        './dist/**/*.css'
    ]).pipe(size());
});

gulp.task('jade', function () {
    jade = jade || require('gulp-jade');
    minifyHTML = minifyHTML || require('gulp-minify-html');
    cachebreaker = cachebreaker || require('gulp-cache-breaker');

    return gulp.src(src.jadeDirs.main)
        .pipe(jade({pretty: false}))
        .on('error', console.log)
        .pipe(minifyHTML({
            empty: true,
            spare: true
        }))
        // .pipe(cachebreaker())
        .on('error', console.log)
        .pipe(gulp.dest('./'));
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

    gulp.watch(src.jadeDirs.main, ['jade']);
    gulp.watch(src.jadeDirs.templates, ['jade_static_templates']);

    gulp.watch(src.stylesDirs, ['stylus']);
    gulp.watch(src.jsDirs, ['js']);
});

gulp.task('build', function () {
    gulp.start('jade');
    gulp.start('stylus');
});

gulp.task('default', function () {
    gulp.start('build');
    gulp.start('watch');
});