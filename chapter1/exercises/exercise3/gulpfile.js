var gulp = require("gulp");
var eslint = require("gulp-eslint");
var gulpNodemon = require("gulp-nodemon");


gulp.task("lint", function() {
  return gulp.src("./src/*.js")
    .pipe(eslint())
    .pipe(eslint.format());
});

gulp.task("dev", function () {
  return gulpNodemon({
    script: "src/index.js",
    watch: "src/*.js",
    exec: "./node_modules/.bin/babel-node"
  });
});


gulp.task("default", ["lint"]);
