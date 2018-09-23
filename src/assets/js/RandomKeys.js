export default class RandomKeys {
  static byteToHex(byte) {
    return ("0" + byte.toString(16)).slice(-2);
  }

  static generateId(len) {
    const arr = new Uint8Array((len || 40) / 2);
    const cryptoObj = window.crypto || window.msCrypto;

    cryptoObj.getRandomValues(arr);
    return [].map.call(arr, RandomKeys.byteToHex).join("");
  }

  static generateUUID() {
    var d = new Date().getTime();
    if (
      typeof performance !== "undefined" &&
      typeof performance.now === "function"
    ) {
      d += performance.now();
    }
    return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function(c) {
      var r = (d + Math.random() * 16) % 16 | 0;
      d = Math.floor(d / 16);
      return (c === "x" ? r : (r & 0x3) | 0x8).toString(16);
    });
  }
}
