export const contact = () => {
  const element = document.createElement("div")
  const menuBgEl = document.createElement("div")
  let centerDivEl = document.createElement("div")
  const contactInfoEl = document.createElement("div")
  const pictureEl = document.createElement("picture")
  let sourceEl = document.createElement("source")
  const imgEl = document.createElement("img")
  let paragraphEl = document.createElement("p")

  element.classList.add("contact")
  menuBgEl.classList.add("menu-background")
  contactInfoEl.classList.add("contact-info")
  centerDivEl.classList.add("center")

  imgEl.src = `https://via.placeholder.com/285`
  imgEl.alt = `picture of restaurant on google maps`

  sourceEl.srcset = `https://via.placeholder.com/600x350`
  sourceEl.media = `(min-width: 800px)`

  pictureEl.appendChild(sourceEl)

  sourceEl = document.createElement("source")
  sourceEl.srcset = `https://via.placeholder.com/300`
  sourceEl.media = `(min-width: 600px)`
  pictureEl.appendChild(sourceEl)
  pictureEl.appendChild(imgEl)

  paragraphEl.textContent = `123-456-7890`
  contactInfoEl.appendChild(paragraphEl)

  paragraphEl = document.createElement("p")
  paragraphEl.textContent = `3420 Broadway St.`
  contactInfoEl.appendChild(paragraphEl)

  paragraphEl = document.createElement("p")
  paragraphEl.textContent = `San Diego, CA 92117`
  contactInfoEl.appendChild(paragraphEl)

  centerDivEl.appendChild(contactInfoEl)
  menuBgEl.appendChild(centerDivEl)
  centerDivEl = document.createElement("div")
  centerDivEl.classList.add("center")
  centerDivEl.appendChild(pictureEl)
  menuBgEl.appendChild(centerDivEl)

  element.appendChild(menuBgEl)
  // element.appendChild(centerDivEl)

  return element
}

export const loadContact = () => {
  const main = document.getElementById("main")
  main.innerHTML = ""
  main.appendChild(contact())
}
