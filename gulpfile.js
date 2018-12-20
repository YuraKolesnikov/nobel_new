var gulp = require('gulp'),
    rigger = require('gulp-rigger'),
    uglify = require('gulp-uglify'),
    babel = require("gulp-babel"),
    browserify = require('gulp-browserify'),
    sass = require('gulp-sass'),
    autoprefixer = require('gulp-autoprefixer'),
    cleanCSS = require('gulp-clean-css'),
    clean = require('gulp-clean'),
    watch = require('gulp-watch'),
    browserSync = require('browser-sync'),
    reload = browserSync.reload;

var config = {
    server: {
        baseDir: './'
    },
    tunnel: true,
    host: 'localhost',
    port: 9000,
    logPrefix: "Server"
};

gulp.task('webserver', function () {
    browserSync(config);
});

gulp.task('js:build', function() {
    return gulp.src(['./app.js'])
        .pipe(browserify({
            insertGlobals : true,
            debug : !gulp.env.production
        }))
        .pipe(babel())
        //.pipe(uglify()) /* Remove comment for build */
        .pipe(gulp.dest('build/'))
        .pipe(reload({stream: true}));
})

gulp.task('sass:build', function() {
    return gulp.src('assets/sass/main.sass')
        .pipe(sass())
        .pipe(autoprefixer({
            browsers: ['last 2 versions'],
            cascade: false
        }))
        .pipe(cleanCSS())
        .pipe(gulp.dest('build/'))
        .pipe(reload({stream: true}));
});

gulp.task('clean', function() {
    return gulp.src('build/*', { read: false })
               .pipe(clean());
});

gulp.task('watch', function() {
    watch(['app.js', 'model/*.js', 'router/*.js', 'controller/*.js'], function(event, cb) {
        gulp.start('js:build');
    });
        
    watch(['assets/sass/**/*.sass'], function(event, cb) {
        gulp.start('sass:build');
    });
});

gulp.task('default', ['webserver', 'js:build', 'sass:build', 'watch'])