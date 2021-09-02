import "./style.css"
import { header, setActiveButton } from "./header"
import { loadHome } from "./home"
import { footer } from "./footer"

const initializePage = () => {
  // get reference to the parent node
  const parentDiv = document.getElementById("main").parentNode
  parentDiv.prepend(header())
  parentDiv.append(footer())

  setActiveButton(document.querySelector(".button-nav"))
  loadHome()
}

initializePage()
