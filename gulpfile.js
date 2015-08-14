/***********************************************
||          WELCOME TO EGGS GENNNY's          ||
||                gulpfile.js                 ||
||                                            ||
||     Alter to suit your needs, this is      ||
||          just a starting place =)          ||
||                                            ||
************************************************/


/***********************************************
**               Require Stuff                **
************************************************/
var gulp    = require('gulp'),
    connect = require('connect'),
    del     = require('del'),
    dirlist = require('dirlist'),
    loggit  = require('loggit'),
    time    = require('./node_modules/timestamp/index.js'),
    glob    = require('glob'),
    plug    = require('gulp-load-plugins')({
                scope: ['devDependencies'],
                replaceString: 'gulp-',
              }),
//  Here's where you can specify which browsers Autoprefixer tests against
//  The default you see here goes back really far, in reality something like 'last 2 versions' gets you > 90% coverage
    supportedBrowsers = [ 'last 4 versions', '> 0.5%', 'ie 7', 'ff 3', 'Firefox ESR', 'Android 2.1' ];



/***********************************************
**          Default Task (dev/watch)          **
************************************************/
gulp.task( 'default', [ 'serve-me', 'reload-me' ]);



/***********************************************
**          Development/Watch Task            **
************************************************/
gulp.task( 'reload-me', function(){

  gulp.watch( 'app/css/*.sass', ['compile-css'] );
  gulp.watch( 'app/js/*.js', ['validate-js'] );

  plug.livereload.listen();
  gulp.watch( ['app/css/*.css', 'app/js/*.js', 'app/index.html', 'app/partials/*.html' ], function(){
    loggit("I've reloaded your page, sir!\n    "+time(), 'yellow', '+' );
  })
  .on('change', plug.livereload.changed);
});



/***********************************************
**               Server Task                  **
************************************************/
gulp.task( 'serve-me', function(){

  var base = __dirname,
      host = "localhost",
      port = 6969;

  connect(  connect.favicon(),
          dirlist(base),
          connect.static(base) ).listen(port, host);
  loggit('Server running at http://'+host+':'+port+'/', 'red', '@' );

});


/***********************************************
**              Validation Task               **
************************************************/
gulp.task( 'validate-me', ['validate-js', 'validate-css' ]);


//  VALIDATION JS
gulp.task( 'validate-js', function(){

  return gulp.src('app/js/*.js')
          .pipe(plug.jshint())
          .pipe(plug.jshint.reporter('default'));

});
//  VALIDATION CSS
gulp.task( 'validate-css', function(){

  return gulp.src('app/css/*.css')
          .pipe(plug.csslint())
          .pipe(plug.csslint.reporter(CSSReport));

});


/***********************************************
**                   build                    **
************************************************/


gulp.task( 'build', [ 'compile-css', 'css-me', 'annotate-me', 'partials-me','js-me', 'assets-me', 'html-me', 'clean-me', 'uncss-me' ]);


//  CSS compile preprocessor
gulp.task( 'compile-css', function(){

return gulp.src('app/css/*.sass')
          .pipe( plug.sass() )
          .on('error', errorLog)
          .pipe( gulp.dest('app/css/') );

});


//  CSSTASKS
gulp.task( 'css-me', ['compile-css'], function(){

  return  gulp.src( [ 'app/lib/css/bootstrap.css', 'app/css/*.css' ] )
            .pipe( plug.concat('styles.css') )
            .pipe( gulp.dest( 'tmp/css' ) )
            .pipe( plug.autoprefixer({
                      browsers: supportedBrowsers,
                      cascade: false
                    }))
            .pipe( plug.csscomb() )
            .pipe( gulp.dest( 'build/css/' ) );

});
gulp.task( 'uncss-me', ['css-me', 'partials-me', 'html-me'], function(){

  return gulp.src('build/css/styles.css')
          .pipe(plug.uncss({
            html: glob.sync('build/**/*.html')
          }))
          .pipe( plug.minifyCss() )
          .pipe(gulp.dest('build/css/'));
});

//  JSTASKS

gulp.task( 'annotate-me',  function(){

  return  gulp.src( 'app/js/app.js' )
          .pipe( plug.ngAnnotate() )
          .on('error', errorLog)
          .pipe(gulp.dest('app/js/'));

});
gulp.task( 'js-me', ['annotate-me'], function(){

  return  gulp.src([
                  'app/lib/js/jquery.js',
                  'app/lib/js/angular.js',
                  'app/js/*.js' ])
          .pipe( plug.concat('scripts.js') )
          .pipe( gulp.dest( 'tmp/js' ) )
          .pipe( plug.uglify( {mangle: false} ) )
          .pipe( gulp.dest( 'build/js' ) );

});


//MOVE ASSETS
gulp.task( 'assets-me', function(){

  //  IMAGES
  gulp.src( 'app/img/**/*' )
    .pipe(plug.imagemin({
      progressive: true,
      optimizationLevel: 5
    }))
    .pipe( gulp.dest('build/img/') );
  //  Favicon move
  gulp.src( 'app/favicon.ico' )
    .pipe( gulp.dest('build/') );

});

gulp.task( 'partials-me', function(){

  return gulp.src( 'app/partials/*' )
          .pipe(plug.angularHtmlify())
          .pipe( gulp.dest('build/partials/') );

});

//HTMLMOVE/REPLACE
gulp.task( 'html-me', function(){

  return gulp.src( 'app/index.html' )
          .pipe(plug.angularHtmlify())
          .pipe(plug.htmlReplace({
              css: {
                src: 'css/styles.css',
                tpl: '  <link rel="stylesheet" type="text/css" href="%s" />'
              },
              js: {
                src: 'js/scripts.js',
                tpl: '  <script type="text/javascript" src="%s"></script>'
              }
          }))
          .pipe(gulp.dest( 'build/' ));
});

gulp.task( 'clean-me', [ 'css-me', 'js-me' ], function(){

  var dels = 'Cleaned up the following: \n';
  del( ['tmp/**','tmp'] , function (err, deletedFiles) {
    deletedFiles.forEach( function( val, index ){
        dels +=  '  - '+val+'\n';
    });
    loggit(dels, 'cyan');
  });

});



/***********************************************
**          Utility/Logging Functions         **
**   Nothing (gulp) to see here, move along   **
************************************************/
var errorLog = function (er){

  var log = "*****************************************\n"+
            "**          CATASTROPHIC ERROR!        **\n"+
            "**                                     **\n"+
            "**       User attempted to use the     **\n"+
            "**     program in the manner it was    **\n"+
            "**          intended to be used!       **\n"+
            "**                                     **\n"+
            "**            ERROR MESSAGE:           **\n"+
            "** "+er.message+" **\n"+
            "**                                     **\n"+
            "*****************************************\n";


  loggit( log, 'red', '  ' );

},
CSSReport = function(file) {

  var ers = file.csslint.errorCount+' errors in '+file.path+'\n';

  file.csslint.results.forEach(function(result) {

    var col = 'yellow';
    if( result.error.type === "error" ){
      col = "red";
    }

    if(result.error.line !== undefined){
      ers += 'LINE '+result.error.line+': ' + result.error.message + "\n";
      ers += '  ' + result.error.evidence + '\n';
    }else{
      ers += 'GENERAL:' + ' ' + result.error.message + "\n";
    }

  });

  loggit(ers, 'white', '=');

};
