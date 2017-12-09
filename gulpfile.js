const gulp = require('gulp')
//const zip = require('gulp-zip')

gulp.task('default', () => {
    gulp.src([
            './lib/**/*.js', 
            './index.js', 
            './package.json',
            './node_modules/alexa-sdk/**/*',
            './node_modules/lodash/**/*',
            './node_modules/i18next/**/*',
            './node_modules/i18next-sprintf-postprocessor/**/*'
        ], { base: './' })
        //.pipe( zip('lambda-deploy.zip') )
        .pipe( gulp.dest('./dist') )
})
