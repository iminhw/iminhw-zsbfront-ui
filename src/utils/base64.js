/**  utf-8转换base64字符串 */
export function utf8_to_base64(str) {
  window.btoa(encodeURIComponent(str));
}
/** base64转换utf-8字符串 */
export function base64_to_utf8(str) {
  decodeURIComponent(window.atob(str));
}
