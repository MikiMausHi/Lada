/**
 * Base64 data to blob
 * @param {string} b64Data
 * @param {string} contentType
 * @param {number} sliceSize
 * @returns {blob}
 */
export function base64ToBlob(b64Data, contentType = '', sliceSize = 512) {
  const byteCharacters = atob(b64Data);
  const byteArrays = [];
  for (let offset = 0; offset < byteCharacters.length; offset += sliceSize) {
    const slice = byteCharacters.slice(offset, offset + sliceSize);
    const byteNumbers = new Array(slice.length);
    for (let i = 0; i < slice.length; i += 1) {
      byteNumbers[i] = slice.charCodeAt(i);
    }
    const byteArray = new Uint8Array(byteNumbers);
    byteArrays.push(byteArray);
  }
  const blob = new Blob(byteArrays, { type: contentType });
  return blob;
}

/**
 * Copy to clipboard
 * @param {string||htmlElement} el
 */
export function copyToClipboard(el) {

  // resolve the element
  const element = (typeof el === 'string') ? document.querySelector(el) : el;

  // handle iOS as a special case
  if (navigator.userAgent.match(/ipad|ipod|iphone/i)) {

    // save current contentEditable/readOnly status
    const editable = element.contentEditable;
    const { readOnly } = element;

    // convert to editable with readonly to stop iOS keyboard opening
    element.contentEditable = true;
    element.readOnly = true;

    // create a selectable range
    const range = document.createRange();
    range.selectNodeContents(element);

    // select the range
    const selection = window.getSelection();
    selection.removeAllRanges();
    selection.addRange(range);
    element.setSelectionRange(0, 999999);

    // restore contentEditable/readOnly to original state
    element.contentEditable = editable;
    element.readOnly = readOnly;

  } else {
    element.select();
  }

  // execute copy command
  document.execCommand('copy');
}

/**
 * Get random integer
 * @param {number} min
 * @param {number} max
 * @returns {number}
 */
export function getRandomInt(min = 1, max = 1000000) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}
