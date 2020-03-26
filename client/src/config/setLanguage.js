export function setLanguage(array) {
  const lang = array.filter(elem => elem.lang.includes(navigator.language) )
  return lang[0].strings
}