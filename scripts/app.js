let container = document.querySelector(".img-container")

let fetchImages = async () => {
  let response = await fetch(`https://pixabay.com/api/?key=449273-41a5e07dbd9fb25f7da6fbe5e&per_page=200`)
  let data = await response.json()
  console.log(data.hits)
  data.hits.map(imageData => {
    let image = document.createElement("img")
    image.setAttribute('src', imageData.previewURL)
    image.classList.add('img')
    image.style.height = imageData.previewHeight*2 + "px"
    image.style.width = imageData.previewWidth*2 + "px"
    container.appendChild(image)
  })
}


let data = fetchImages()


