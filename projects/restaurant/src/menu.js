export const menu = () => {
  const element = document.createElement("div")
  const gridBgEl = document.createElement("div")
  const gridEl = document.createElement("div")
  const gridItemsEls = []

  for (let i = 0; i < 9; i++) {
    const gridItemEl = document.createElement("div")
    gridItemEl.textContent = `Test Menu Item`
    gridItemEl.classList.add("grid-item")
    gridItemsEls.push(gridItemEl)
  }

  gridBgEl.classList.add("grid-background", "center")
  gridEl.classList.add("grid")

  for (let gridItemEl of gridItemsEls) {
    gridEl.appendChild(gridItemEl)
  }

  gridBgEl.appendChild(gridEl)
  element.appendChild(gridBgEl)

  element.classList.add("menu")
  return element
}

export const loadMenu = () => {
  const main = document.getElementById("main")
  main.innerHTML = ""
  main.appendChild(menu())
}
