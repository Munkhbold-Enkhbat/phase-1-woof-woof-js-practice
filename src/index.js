document.addEventListener('DOMContentLoaded', () => {
  getAllPups()
})

function getAllPups() {
  fetch('http://localhost:3000/pups')
  .then(res => res.json())
  .then(pups => pups.forEach(pup => renderPupNames(pup)))
}

function renderPupNames(obj) {
  const span = document.createElement('span')
  span.textContent = obj.name
  span.addEventListener('click', () => {
    document.querySelector('div#dog-info').innerText = ''
    renderPupInfo(obj)
  })
  document.querySelector('div#dog-bar').appendChild(span)
}

function renderPupInfo(obj) {
  const card = document.createElement('div')
  card.id = 'dog-info' 
  let whichDog = 'Good Dog!'
  if(!obj.isGoodDog) {
    whichDog = 'Bad Dog!'
  }
  card.innerHTML = `
  <img src='${obj.image}'/>
  <h2>${obj.name}</h2>
  <button>${whichDog}</button>`

  const button = card.querySelector('button')
  button.addEventListener('click', () => {
    if(whichDog === 'Good Dog!') {
      whichDog = 'Bad Dog!'
    } else {
      whichDog = 'Good Dog!'
    }
    button.innerText = whichDog
    card.appendChild(button)
  })
  document.querySelector('div#dog-info').appendChild(card)
}

