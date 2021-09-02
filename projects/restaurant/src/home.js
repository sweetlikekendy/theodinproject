import { copy } from "./copy"
import { hero } from "./hero"

export const home = () => {
  const element = document.createElement("div")

  element.classList.add("home")

  element.appendChild(hero())
  element.appendChild(copy())

  return element
}

export const loadHome = () => {
  const main = document.getElementById("main")
  main.innerHTML = ""
  main.appendChild(home())
}
