// Імпортуємо необхідні пакети
import gulp from "gulp";
import { deleteAsync } from "del";
import browserSync from "browser-sync";
import cleanCSS from "gulp-clean-css";
import sourcemaps from "gulp-sourcemaps";
import gulpSvgSprite from "gulp-svg-sprite";
import * as dartSass from "sass";
import gulpSass from "gulp-sass";
import fs from "fs/promises";
import path from "path";
import { globby } from "globby";

const sass = gulpSass(dartSass);
const server = browserSync.create();

// === Очистка build-папки ===
export const clean = () => {
  return deleteAsync(["build"]);
};

// === Обробка стилів SCSS ===
export const styles = () => {
  return gulp
    .src("source/sass/style.scss")
    .pipe(sourcemaps.init())
    .pipe(sass().on("error", sass.logError))
    .pipe(cleanCSS())
    .pipe(sourcemaps.write("."))
    .pipe(gulp.dest("build/styles"))
    .pipe(server.stream());
};

// === Генерація SVG-спрайту ===
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
        shape: {
          transform: [], // уникаємо помилок через SVGO
        },
      })
    )
    .pipe(gulp.dest("build/svg/icon"));
};

// === Копіювання HTML-файлів ===
export const html = () => {
  return gulp.src("source/**/*.html").pipe(gulp.dest("build"));
};

// === Копіювання HTML-файлів ===
export const jsfile = () => {
  return gulp.src("source/**/*.js").pipe(gulp.dest("build/"));
};

// === Очистка зображень у build/img ===
export const cleanImages = () => {
  return deleteAsync(["build/img/**/*"]);
};

// === Оптимізація та копіювання зображень ===
// export const copyImages = async () => {
//   const { default: imagemin } = await import("gulp-imagemin");
//   const { default: imageminMozjpeg } = await import("imagemin-mozjpeg");
//   const { default: imageminPngquant } = await import("imagemin-pngquant");

//   return gulp
//     .src("source/img/**/*.{jpg,jpeg,png}")
//     .pipe(
//       imagemin([
//         imageminMozjpeg({ quality: 75, progressive: true }),
//         imageminPngquant({ quality: [0.6, 0.8] }),
//       ])
//     )
//     .pipe(gulp.dest("build/img"));
// };

// === Альтернативна копія зображень (без оптимізації) ===
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

// === Запуск локального сервера ===
export const serve = () => {
  server.init({
    server: {
      baseDir: "build",
    },
  });

  gulp.watch("source/sass/**/*.scss", styles);
  gulp.watch("source/svg/icon/**/*.svg", gulp.series(svgSprite, server.reload));
  gulp.watch("source/**/*.html", gulp.series(html, server.reload));
};

// === Основна збірка ===
export const build = gulp.series(
  clean,
  cleanImages,
  gulp.parallel(styles, svgSprite, html, copyImages, jsfile)
);

// === За замовчуванням: збірка + сервер ===
export default gulp.series(build, serve);
