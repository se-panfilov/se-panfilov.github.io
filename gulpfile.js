var gulp = require('gulp');
var gulpsmith = require('gulpsmith');
var markdown = require('metalsmith-markdown');


var src = './src';
var dest = './build';

gulp.task('build', function () {
    return gulp.src('./src/**/*')
        .pipe(gulpsmith()
            .metadata({site_name: 'My Site'})
        .use(markdown())
        //.use(permalinks('posts/:title'))
    )
        //.pipe(another_gulp_plugin(more_options))
        .pipe(gulp.dest(dest));
})
;