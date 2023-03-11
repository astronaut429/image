const sharp = require("sharp");

async function resizeImage() {
  try {
    await sharp("g.jpg")
      .resize({
        width: 50,
        height: 30,
      })
      .toFile("g_resize.jpg");
  } catch (error) {
    console.log(error);
  }
}

resizeImage();
