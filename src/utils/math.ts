export interface IRect {
  top: number;
  left: number;
  bottom: number;
  right: number;
}

export function getWidthOfRect(rect: IRect) {
  return rect.right - rect.left;
}

export function getHeightOfRect(rect: IRect) {
  return rect.bottom - rect.top;
}

// 如果人脸在图片中的比例有这么大，直接返回原图
const bigHeadCoeffient = 3;
// const widthBase = 3
// const heightBase = 4
const idealScale = 2.3;

export function getProperScaledFace(
  image: { width: number; height: number },
  face: IRect
): { goodRect: IRect; originalCoord?: IRect } {
  const faceWidth = getWidthOfRect(face);
  const faceHeight = getHeightOfRect(face);

  const faceCenter = {
    y: (face.bottom + face.top) / 2,
    x: (face.right + face.left) / 2
  };

  const maxFaceWidth = 2 * Math.min(faceCenter.x, image.width - faceCenter.x);
  const maxFaceHeight = 2 * Math.min(faceCenter.y, image.height - faceCenter.y);

  if (
    faceWidth * bigHeadCoeffient > image.width &&
    faceHeight * bigHeadCoeffient > image.height
  ) {
    // 如果是传原图 坐标得比原始大小少1
    return {
      goodRect: {
        top: 0,
        left: 0,
        right: image.width,
        bottom: image.height
      },
      originalCoord: {
        top: 0,
        left: 0,
        right: image.width - 1,
        bottom: image.height - 1
      }
    };
  }
  // 可以进行放大并且不会有黑边出现
  const maxDoableScale = Math.min(
    maxFaceWidth / faceWidth,
    maxFaceHeight / faceHeight
  );

  const scale = Math.min(maxDoableScale, idealScale);

  return {
    goodRect: {
      left: faceCenter.x - faceWidth / 2 * scale,
      top: faceCenter.y - faceHeight / 2 * scale,
      right: faceCenter.x + faceWidth / 2 * scale,
      bottom: faceCenter.y + faceHeight / 2 * scale
    }
  };
}

export function getCoverRect(
  containerSize: { width: number; height: number },
  imageSize: { width: number; height: number }
) {
  const scale = Math.max(
    containerSize.width / imageSize.width,
    containerSize.height / imageSize.height
  );

  const center = {
    x: containerSize.width / 2,
    y: containerSize.height / 2
  };

  const scaledImage = {
    width: imageSize.width * scale,
    height: imageSize.height * scale
  };

  return {
    left: center.x - scaledImage.width / 2,
    top: center.y - scaledImage.height / 2,
    right: center.x + scaledImage.width / 2,
    bottom: center.y + scaledImage.height / 2
  };
}

export function moveRect(rect: IRect, offset: { x: number; y: number }) {
  return {
    top: rect.top + offset.y,
    left: rect.left + offset.x,
    bottom: rect.bottom + offset.y,
    right: rect.right + offset.x
  };
}

export function scaleRect(
  rect: IRect,
  anchor: { x: number; y: number },
  scale: number
): IRect {
  const width = rect.right - rect.left;
  const height = rect.bottom - rect.top;

  const leftPortion = (anchor.x - rect.left) / width;
  const topPortion = (anchor.y - rect.top) / height;

  const newWidth = width * scale;
  const newHeight = height * scale;

  const newLeft = anchor.x - newWidth * leftPortion;
  const newTop = anchor.y - newHeight * topPortion;

  return {
    left: newLeft,
    top: newTop,
    right: newLeft + newWidth,
    bottom: newTop + newHeight
  };
}

// https://stackoverflow.com/questions/21797299/convert-base64-string-to-arraybuffer
export function base64ToArrayBuffer(base64) {
  var binary_string = window.atob(base64.split(",")[1]);
  var len = binary_string.length;
  var bytes = new Uint8Array(len);
  for (var i = 0; i < len; i++) {
    bytes[i] = binary_string.charCodeAt(i);
  }
  return bytes.buffer;
}

/**
 * 计算一个数的整数部分中有几个数
 * 例如
 *  integerWidth(1) => 1,
 *  integerWidth(12) => 2,
 *  integerWidth(123) => 3, 
 * @param value 
 * @param base 基底/进制
 */
export const integerWidth = (value, base = 10) => {
  value = Number(value);
  base = Number(base);

  if (Number.isNaN(value) ||
    Number.isNaN(base)) {
    return NaN;
  } else if (0 === base) {
    return Infinity;
  }  else if (0 === value) {
    return 0;
  } else {
    return Math.floor(Math.log(Math.abs(value)) / Math.log(base) + 1);
  }
};

export const positiveIntegerValidator = value => value > 0 && value % 1 === 0;

export const naturalIntegerValidator = value => value >= 0 && value % 1 === 0;

/**
 * 按三角函数曲线变换输入
 * 
 * 用于动画
 * @param ratio 0-1
 * @returns 0-1
 */
export const ease = (ratio: number) =>
  (1 - Math.cos(ratio * Math.PI)) / 2;
