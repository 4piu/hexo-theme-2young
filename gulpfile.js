const del = require("del");
const {series, parallel, src, dest, watch} = require("gulp");
const babel = require("gulp-babel");
const less = require("gulp-less");
const uglify = require("gulp-uglify");
const rev = require("gulp-rev");
const revRewrite = require("gulp-rev-rewrite");
const revDelete = require("gulp-rev-delete-original");
const revCss = require("gulp-rev-css-url");
const cleanCSS = require("gulp-clean-css");
const webp = require('gulp-webp');

const clean = () => {
    return del([
        "source/",
        "layout/",
        "scripts/",
        "languages/",
        "rev-manifest.json",
        "_config.example.yml"
    ]);
};

const cssCompile = () => {
    return src("src/layout/**/*.less")
        .pipe(less())
        .pipe(cleanCSS())
        .pipe(dest("source/css/"));
};

const jsCompile = () => {
    return src("src/js/**/*.js")
        .pipe(babel({
            presets: ["@babel/preset-env"]
        }))
        .pipe(uglify())
        .pipe(dest("source/js/"));
};

const imgCompress = () => {
    return src("src/assets/*")
        .pipe(webp())
        .pipe(dest("source/assets/"));
};

const copyFile = () => {
    return src([
        "src/_config.example.yml",
        "src/languages/*",
        "src/scripts/*"
    ], {
        base: "src/"
    })
        .pipe(dest("."));
};

const revision = () => {
    return src("source/**/*.{css,js}")
        .pipe(rev())
        .pipe(revCss())
        .pipe(revDelete())
        .pipe(dest("source/"))
        .pipe(rev.manifest())
        .pipe(dest("."));
};

const layout = () => {
    const manifest = src("rev-manifest.json");

    return src("src/layout/**/*.ejs")
        .pipe(revRewrite({manifest}))
        .pipe(dest("layout/"));
};

exports.clean = clean;

exports.build = series(
    clean,
    parallel(cssCompile, jsCompile, imgCompress, copyFile),
    revision,
    layout
);