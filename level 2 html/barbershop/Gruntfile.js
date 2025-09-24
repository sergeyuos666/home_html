module.exports = function (grunt) {
  grunt.loadNpmTasks("grunt-contrib-less");

  grunt.initConfig({
    less: {
      style: {
        files: {
          "css/style.css": "less/style.less",
        },
      },
    },
  });
};

module.exports = function (grunt) {
  require("load-grunt-tasks")(grunt); // Завантажуємо всі плагіни Grunt
  grunt.initConfig({
    csso: {
      style: {
        options: {
          report: "gzip",
        },
        files: {
          "source/css/style.min.css": ["./css/style.css"],
        },
      },
    },

    imagemin: {
      images: {
        options: {
          optimalizationLevel: 3,
          progressive: true,
        },
        files: [
          {
            expand: true,
            src: [".img/**/*.{png,jpg,gif}"],
          },
        ],
      },
    },

    cwebp: {
      images: {
        options: {
          q: 90,
        },
        files: [
          {
            expand: true,
            src: ["./img/**/*.{png,jpg,gif}"],
          },
        ],
      },
    },
  });
};
