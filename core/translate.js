/**
 * 功能：image转换成base64
 * @param {String} imageUrl 图片地址
 * @param {String} fileType 图片格式
 * @param {Number} quality 图片质量
 * @returns {Promise}
 */
export function translateImageUrl2Base64(imageUrl, fileType = 'image/png', quality = 1.0) {
  return new Promise((resolve, reject) => {
    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');

    const handleLoad = () => {
      const w = image.naturalWidth;
      const h = image.naturalHeight;
      canvas.width = w;
      canvas.height = h;
      ctx.drawImage(image, 0, 0, w, h, 0, 0, w, h);
      const base64 = canvas.toDataURL(fileType, quality);
      resolve(base64);
    };

    const handleError = () => {
      reject({
        errMsg: 'Image loading error.'
      });
    };

    if (!ctx) {
      reject({
        errMsg: 'Canvas context init error.'
      });
      return;
    }

    const image = new Image();
    image.setAttribute('crossOrigin', 'Anonymous');
    image.onload = handleLoad;
    image.onerror = handleError;
    image.src = imageUrl;
  });
}
