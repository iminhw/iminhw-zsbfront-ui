import CryptoJS from "crypto-js";
const keyStr = "JK6wxIfrOleaU2Em";
const key = CryptoJS.enc.Utf8.parse(keyStr);

//解密方法
export function decrypt(word) {
  let decrypt = CryptoJS.AES.decrypt(word, key, { mode:CryptoJS.mode.ECB,padding: CryptoJS.pad.Pkcs7});
  let decryptedStr = decrypt.toString(CryptoJS.enc.Utf8);
  return decryptedStr.toString();
}

//加密方法
export function encrypt(word) {
  let srcs = CryptoJS.enc.Utf8.parse(word);
  let encrypted = CryptoJS.AES.encrypt(srcs, key, {mode: CryptoJS.mode.ECB, padding: CryptoJS.pad.Pkcs7});
  return encrypted.toString();
}