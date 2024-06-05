var gulp = require("gulp");
var browserSync = require("browser-sync").create();

// Static server
gulp.task("serve", function () {
  browserSync.init({
    proxy: "localhost:8080/public/toDoAppIndex.html", // your PHP server address
  });

  gulp.watch("**/*.php").on("change", browserSync.reload);
  gulp.watch("**/*.html").on("change", browserSync.reload);
  gulp.watch("**/*.css").on("change", browserSync.reload);
  gulp.watch("**/*.js").on("change", browserSync.reload);
});

gulp.task("default", gulp.series("serve"));
