// Імпортуємо необхідні пакети
import gulp from "gulp";
import { deleteAsync } from "del";
import browserSync from "browser-sync";
import cleanCSS from "gulp-clean-css";
import sourcemaps from "gulp-sourcemaps";
import gulpSvgSprite from "gulp-svg-sprite";
import dartSass from "sass";
import gulpSass from "gulp-sass";
import fs from "fs/promises";
import path from "path";
import { globby } from "globby";

const sass = gulpSass(dartSass);
const server = browserSync.create();

// Очистка вихідної папки
export const clean = () => {
  return deleteAsync(["build"]);
};

// Обробка CSS
export const styles = () => {
  return gulp
    .src("./source/sass/style.scss")
    .pipe(sourcemaps.init())
    .pipe(sass().on("error", sass.logError))
    .pipe(cleanCSS())
    .pipe(sourcemaps.write("."))
    .pipe(gulp.dest("build/styles"))
    .pipe(server.stream());
};

// Обробка SVG-спрайту
export const svgSprite = () => {
  return gulp
    .src("./source/svg/icon/**/*.svg")
    .pipe(
      gulpSvgSprite({
        mode: {
          symbol: {
            sprite: "sprite.svg",
          },
        },
      })
    )
    .pipe(gulp.dest("build/svg/icon"));
};

// Копіювання HTML
export const html = () => {
  return gulp.src("source/**/*.html").pipe(gulp.dest("build"));
};

// Очищення зображень
export const cleanImages = () => {
  return deleteAsync(["build/img/**/*"]);
};

// Копіювання зображень (без оптимізації, але без втрат)

// Копіювання зображень без Gulp — надійно
export const copyImages = async () => {
  const files = await globby("source/img/**/*.{jpg,jpeg,png,svg,gif}", {
    onlyFiles: true,
  });

  await Promise.all(
    files.map(async (file) => {
      const destPath = file.replace("source", "build");
      const destDir = path.dirname(destPath);

      await fs.mkdir(destDir, { recursive: true });
      await fs.copyFile(file, destPath);
    })
  );
};
// Налаштування live-сервера
export const serve = () => {
  server.init({
    server: {
      baseDir: "build",
    },
  });

  gulp.watch("./source/sass/**/*.scss", styles);
  gulp.watch("./source/svg/icon/**/*.svg", svgSprite);
  gulp.watch("./build/**/*.html").on("change", server.reload);
};

// Основна задача
export const build = gulp.series(
  clean,
  cleanImages,
  gulp.parallel(styles, svgSprite, html, copyImages)
);

// За замовчуванням: збирання + запуск сервера
export default gulp.series(build, serve);
