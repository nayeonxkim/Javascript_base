let pk = 0
    
const createDiv = function (URL) {
  const body = document.querySelector('body')
  const div = document.createElement('div')
  div.innerHTML = `
  <p>${pk}번째 이미지</p>
  <img src="${URL}" width="300px" height="300px">
  `
  body.appendChild(div)
  // const body = document.querySelector('body')
  // const div = document.createElement('div')
  // const img = document.createElement('img')
  // const p = document.createElement('p')
  // p.textContent = `${pk}번째 이미지`
  // img.addEventListener('load', function () {
  //   div.appendChild(p)
  //   div.appendChild(img)
  //   body.appendChild(div)
  // })
  // img.src = URL
}

const getCat = function () {
  axios({method: 'get', url: CAT_URL})
    .then(function (response) {
      const image = response.data[0]
      createDiv(image.url)
    })
}

const getDog = function () {
  axios({method: 'get', url: DOG_URL})
    .then(function (response) {
      const image = response.data
      createDiv(image.message)
    })
}

btn.addEventListener('click', function (event) {
  if (pk%2) {
    getDog()
  } else {
    getCat()
  }
  pk++
})