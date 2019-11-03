module.exports = function() {

// Compile SASS
    $.gulp.task('scss', function() {
        return $.gulp.src($.path.src.scss)
            .pipe($.gp.plumber({ errorHandler: $.onError }))
            .pipe($.gp.sass())
            .pipe($.gulp.dest($.path.build.scss))
            .pipe($.gp.notify({ message: 'SASS compiled!' }));
    });
};