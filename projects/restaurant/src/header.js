import { loadHome } from "./home"
import { loadMenu } from "./menu"
import { loadContact } from "./contact"

export const header = () => {
  const element = document.createElement("header")
  const navEl = document.createElement("nav")
  const navMenuLinkEls = []
  const navMenuLink = ["Home", "Menu", "Contact"]

  for (let navLink of navMenuLink) {
    const div = document.createElement("div")
    div.textContent = navLink
    div.classList.add("button-nav")

    if (navLink === "Home") {
      setActiveButton(div)
    }

    div.addEventListener("click", () => {
      console.log(`inside ${navLink}`)
      setActiveButton(div)
      switch (navLink) {
        case "Home":
          loadHome()
          break
        case "Menu":
          loadMenu()
          break
        case "Contact":
          loadContact()
          break
        default:
          throw new Error()
      }
    })

    navMenuLinkEls.push(div)
  }

  for (let navMenuLinkEl of navMenuLinkEls) {
    navEl.appendChild(navMenuLinkEl)
  }

  element.append(navEl)

  return element
}

export const setActiveButton = (button) => {
  const buttons = document.querySelectorAll(".button-nav")

  buttons.forEach((button) => {
    if (button !== this) {
      button.classList.remove("active-button-nav")
    }
  })

  button.classList.add("active-button-nav")
}
