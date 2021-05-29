export default function compress(imageDataURL) {
  return new Promise((resolve) => {
    let canv = document.createElement("canvas");
    let c = canv.getContext("2d");
    let img = new Image();
    img.src = imageDataURL;
    img.onload = () => {
      if (img.width > img.height) {
        canv.width = 250;
        canv.height = 250 * img.height / img.width;
      } else if (img.height > img.width) {
        canv.height = 250;
        canv.width = 250 * img.width / img.height;
      } else {
        canv.width = 250;
        canv.height = 250;
      }

      c.drawImage(img, 0, 0, canv.width, canv.height);

      resolve(canv.toDataURL());
    }
  })
}