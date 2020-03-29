export function setLanguage (array) {
  const browserLang = array.filter(elem => elem.lang.includes(navigator.language))
  const myLang = browserLang[0] ? browserLang[0].strings : array[0].strings
  return myLang
}
