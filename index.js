const sharp = require("sharp");

async function resizeImage() {
  try {
    await sharp("g.jpg")
      .resize({
        width: 150,
        height: 97,
      })
      .toFile("g_resize.jpg");
  } catch (error) {
    console.log(error);
  }
}

resizeImage();
