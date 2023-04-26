const API_KEY ='681c18463dfa6515fe7bb4db92eeebdf'
const searchBtn = document.querySelector('.search-box__button')
const searchResult = document.querySelector('.search-result')

const fetchAlbums = function (page=1, limit=10) {
    console.log('test')
    const keyword = document.querySelector('.search-box__input').value
    const loading = document.querySelector('.search-result--loadingList')
    loading.style.display = 'block'
    axios({
      method: 'get',
      url: 'https://ws.audioscrobbler.com/2.0',
      params: {
        method: 'album.search',
        album: keyword,
        api_key: API_KEY,
        page: page,
        limit: limit,
        format: 'json'
      }
    })
      .then(result => {
        const results = result.data.results.albummatches.album
        results.forEach(res => {
          const searchResultItems = document.createElement('div')
          searchResultItems.setAttribute('class', 'search-result__card')
          searchResultItems.innerHTML = `
            <img src="${res.image[1]['#text']}"> 
            <div class="search-result__text"> 
              <h2>${res.artist}</h2> 
              <p>${res.name}</p>
            </div>`
          searchResult.appendChild(searchResultItems)
          searchResult.appendChild(target)
          loading.style.display = 'none'
        })
        
      })
      .catch(() => alert('잠시 후 다시 시도해 주세요.'))
  }

let page = 1
const target = document.createElement('div')
target.id = 'target'

function createObserver(target) {
  // console.log('test createObserver')
  const callingObserve = (entries) => {
    // console.log('test callingObserve')
    entries.forEach(enrty => {
      // console.log('test forEach')
      if (enrty.isIntersecting) {
        // console.log('not working?')
        page += 1
        fetchAlbums(page)
      }
    })
  }
  
  let observer = new IntersectionObserver(callingObserve)
  observer.observe(target)
}

createObserver(target)

searchBtn.addEventListener('click', fetchAlbums)