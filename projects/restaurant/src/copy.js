export const copy = () => {
  const element = document.createElement("div")
  const paragraph = document.createElement("p")

  paragraph.textContent = `Come eat at our great restaurant with amazing food made with high
  quality ingredients. Insert buzzwords, "organic", "gluten-free",
  "vegan".`
  element.classList.add("copy")
  element.appendChild(paragraph)

  return element
}
