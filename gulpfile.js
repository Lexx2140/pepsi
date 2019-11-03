global.$ = {

    gulp: require('gulp'),
    gp: require('gulp-load-plugins')(),

    path: {
        tasks: require('./gulp/tasks.js'),

        build: {
            scss: 'assets/css/',
            js: 'assets/js/',
        },

        src: {
            scss: 'src/scss/*.scss',
            js: 'src/js/*.js',
        },

        watch: {
            scss: 'src/scss/*.scss',
            js: 'src/js/*.js'
        }
    },

    // Error notify => send explanation to console
    onError: function(err) {
        $.gp.notify({
            title: 'GulpTask Error',
            message: 'Check the console.'
        });

        console.log(err.toString());
        // this.emit('end');
    }
};

// Append tasks pathes
$.path.tasks.forEach(function(taskPath) {
    require(taskPath)();
});


// Default task
$.gulp.task('default', $.gulp.series('watch'));

