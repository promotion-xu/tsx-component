
export function setHtmlFontSize() {
  const clientWidth = document.documentElement.clientWidth;
  document.querySelector('html')!.style.cssText = `font-size:${clientWidth / 19.2}px`;
}