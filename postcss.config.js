module.exports = {
  plugins: [
    require("postcss-import"), // CSS dosyalarını sırasıyla içe aktarır
    require("autoprefixer"), // Tarayıcı uyumluluğu ekler
    require("cssnano"), // CSS'i minify eder
  ],
};
