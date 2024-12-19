/**
 * 1. Averigua qué hace la siguiente función
 */
const getFileNameFromUrl = (url, includeExtension = false) => {
  try {
    const urlObject = new URL(url);
    if (urlObject) {
      const fileName = urlObject.pathname.split('/').pop();
      if (fileName) {
        if (includeExtension) return fileName;
        return getFileNameWithoutExtension(fileName);
      }
    }
  } catch (error) {
    console.error('Cannot get filename from url: ' + url);
  }
};

const getFileNameWithoutExtension = (fileName) => {
  if (!fileName) return;
  const lastDotIndex = fileName.lastIndexOf('.');
  return lastDotIndex > 0 ? fileName.substring(0, lastDotIndex) : fileName;
};
