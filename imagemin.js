const imagemin = require("imagemin");
const imageminWebp = require("imagemin-webp");

imagemin(["src/static/firstDorm/*.{jpg,png,JPG}"], "src/build/images", {
  use: [imageminWebp({ quality: 50 })]
}).then(() => {
  console.log("Images optimized");
});
