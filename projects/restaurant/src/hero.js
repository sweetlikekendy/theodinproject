export const hero = () => {
  const element = document.createElement("div")
  const siteTitleEl = document.createElement("h1")
  const divEl = document.createElement("div")
  const pictureEl = document.createElement("picture")
  const sourceEl1 = document.createElement("source")
  const sourceEl2 = document.createElement("source")
  const imgEl = document.createElement("img")

  imgEl.src = `https://via.placeholder.com/285`
  imgEl.alt = `example picture`

  sourceEl1.srcset = `https://via.placeholder.com/800x400`
  sourceEl1.media = `(min-width: 800px)`

  sourceEl2.srcset = `https://via.placeholder.com/600x300`
  sourceEl2.media = `(min-width: 600px)`

  pictureEl.appendChild(sourceEl1)
  pictureEl.appendChild(sourceEl2)
  pictureEl.appendChild(imgEl)

  divEl.classList.add("center")
  divEl.appendChild(pictureEl)

  siteTitleEl.classList.add("site-title")
  siteTitleEl.textContent = `GREAT RESTAURANT HERE`

  element.classList.add("hero")
  element.appendChild(siteTitleEl)
  element.appendChild(divEl)

  return element
}
