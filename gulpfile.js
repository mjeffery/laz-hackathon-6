const gulp = require('gulp')
const zip = require('gulp-zip')

gulp.task('default', () => {
    gulp.src([
            './lib/**/*.js', 
            './index.js', 
            './package.json',
            './node_modules/alexa-sdk/**/*'
        ], { base: './' })
        .pipe( zip('lambda-deploy.zip') )
        .pipe( gulp.dest('./dist') )
})
