const imagemin = require("imagemin");
const imageminWebp = require("imagemin-webp");

imagemin(["src/static/firstDorm/*.{jpg,png,JPG}"], "src/build/images", {
  use: [imageminWebp({ quality: 80 })]
}).then(() => {
  console.log("Images optimized");
});
