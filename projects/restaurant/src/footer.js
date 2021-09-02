export const footer = () => {
  const element = document.createElement("footer")
  const date = new Date()
  const year = date.getFullYear()
  element.innerHTML = `&copy; ${year} GREAT RESTAURANT HERE`
  // element.classList.add("site-content")
  return element
}
