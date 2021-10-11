function init() {
  //console.log('JS working')

  // ** VARIABLES ** 
  const grid = document.querySelector('.grid') // get grid element
  const width = 13
  const height = 13
  const cellCount = width * height// total number of cells

  const cells = [] // empty array to store the divs that we create
  const start = document.querySelector('button')
  // Character
  const character = document.querySelector('.character')
  const characterStartPosition = 6
  let characterCurrentPosition = 6
  const willyWonka = document.querySelector('#willy-wonka')
  const charlie = document.querySelector('#charlie')
  const violet = document.querySelector('#violet')
  const oompaLoompa = document.querySelector('#oompa-loompa')
  // Sweets/chocs/biscuits
  const pinkPartyRing = document.querySelector('.pink-party-ring')
  const pinkPartyRingStartPosition = 143
  let pinkPartyRingCurrentPosition = 143
  const pinkPartyRingTwo = document.querySelector('.pink-party-ring')
  const pinkPartyRingTwoStartPosition = 147
  let pinkPartyRingTwoCurrentPosition = 147

  const custardCream = document.querySelector('.custard-cream')
  const custardCreamStartPosition = 142
  let custardCreamCurrentPosition = 142

  const yellowPartyRing = document.querySelector('.yellow-party-ring')
  const yellowPartyRingStartPosition = 117
  let yellowPartyRingCurrentPosition = 117

  const egg = document.querySelector('.egg')
  const eggStartPosition = 91
  let eggCurrentPosition = 91

  const heart = document.querySelector('.heart')
  const heartStartPosition = 90
  let heartCurrentPosition = 90

  const worm = document.querySelector('.worm')
  const wormStartPosition = 65
  let wormCurrentPosition = 65

  const yellowSkittle = document.querySelector('.skittle-yellow')
  const yellowSkittleStartPosition = 39
  let yellowSkittleCurrentPosition = 39

  const cremeEgg = document.querySelector('.creme-egg')
  const cremeEggStartPosition = 38
  let cremeEggCurrentPosition = 38

  const greenSkittle = document.querySelector('.skittle-green')
  const greenSkittleStartPosition = 13
  let greenSkittleCurrentPosition = 13


  // ** FUNCTIONS FOR MAKING GRID AND ADDING CHARACTER **

  // Making grid

  function createGrid(characterStartPosition) {
    for (let i = 0; i < cellCount; i++) { // for loop to run for every cell
      const cell = document.createElement('div') // create the div
      //console.log(cell)
      cell.innerText = i // inner text of the div to be its index
      grid.appendChild(cell) // make the cell a child of the grid element we grabbed above
      cells.push(cell) // add the newly created div into our empty array
    }
    addCharacter(characterStartPosition) // call the function that adds the char to the starting position

    addingPinkPartyRing(pinkPartyRingStartPosition)
    addingPinkPartyRingTwo(pinkPartyRingTwoStartPosition)

    addingCustardCream(custardCreamStartPosition)
    addingYellowPartyRing(yellowPartyRingStartPosition)
    addingEgg(eggStartPosition)
    addingHeart(heartStartPosition)
    addingWorm(wormStartPosition)
    addingYellowSkittle(yellowSkittleStartPosition)
    addingCremeEgg(cremeEggStartPosition)
    addingGreenSkittle(greenSkittleStartPosition)




  }
  // Add rainbow belt
  // function addRainbowBelt() {
  //   if ()
  // }

  // console.log(cells)


  // Add character to grid

  function addCharacter(position) { // takes argument so function is reusable
    //console.log(position)
    //console.log(cells[position])
    cells[position].classList.add('character') // use position as index to pick the corresponding div from the array of cells and add the class of char
  }
  // Change characters

  // function characterChange(event) {
  //   console.log(event.target.id)
  //   if (event.target.id = willyWonka) {
  //     character.style.background = "url('../assets/oompa_loompa_transparent-removebg-preview.png');"
  //     //console.log(character)
  //   } else if (event.target.id = charlie) {
  //     character.style.background = "url('../assets/charlie.png');"
  //   } else if (event.target.id = violet) {
  //     character.style.background = "url('../assets/violet.png');"
  //   } else if (event.target.id = oompaLoompa) {
  //     character.style.background = "url('../assets/oompa_loompa_transparent-removebg-preview.png');"
  //   }
  // }

  // Remove character from grid
  function removeCharacter(position) {
    cells[position].classList.remove('character')
  }
  // Moving character around the grid

  function handleKeyUp(event) {
    const key = event.keyCode
    //console.log('position before moving', characterCurrentPosition)
    removeCharacter(characterCurrentPosition)

    if (key === 39 && characterCurrentPosition % width !== width - 1) { // if the right arrow is pressed and the character is not on the right edge
      characterCurrentPosition++ // redefine character position index to be previous position plus 1
    } else if (key === 37 && characterCurrentPosition % width !== 0) { // if the left arrow is pressed and the cat is not on the left edge
      characterCurrentPosition-- // redefine character position index to be previous position minus 1
    } else if (key === 38 && characterCurrentPosition >= width) { // if the up arrow is pressed and the character is not on the top row
      characterCurrentPosition -= width // redefine cacharactert position index to be previous position minus width
    } else if (key === 40 && characterCurrentPosition + width <= width * height - 1) { // if the down arrow is pressed and the character is not on the bottom row
      characterCurrentPosition += width // redefine character position index to be previous position plus width
    } else {
      //console.log('INVALID KEY') // any other key, log invalid key
    }
    //console.log('POSITION AFTER REDEFINING --->', characterCurrentPosition)
    addCharacter(characterCurrentPosition)

  }


  // ** FUNCTIONS FOR MOVING FOOD **

  // *ADDING FOOD*
  function addingPinkPartyRing(position) {
    cells[position].classList.add('pink-party-ring')
  }
  function addingPinkPartyRingTwo(position) {
    cells[position].classList.add('pink-party-ring')
  }
  function addingCustardCream(position) {
    cells[position].classList.add('custard-cream')
  }
  function addingCustardCreamTwo(position) {
    cells[position].classList.add('custard-cream')
  }
  function addingYellowPartyRing(position) {
    cells[position].classList.add('yellow-party-ring')
  }
  function addingYellowPartyRingTwo(position) {
    cells[position].classList.add('yellow-party-ring')
  }
  function addingEgg(position) {
    cells[position].classList.add('egg')
  }
  function addingEggTwo(position) {
    cells[position].classList.add('egg')
  }
  function addingHeart(position) {
    cells[position].classList.add('heart')
  }
  function addingHeartTwo(position) {
    cells[position].classList.add('heart')
  }
  function addingWorm(position) {
    cells[position].classList.add('worm')
  }
  function addingWormTwo(position) {
    cells[position].classList.add('worm')
  }
  function addingYellowSkittle(position) {
    cells[position].classList.add('yellow-skittle')
  }
  function addingYellowSkittleTwo(position) {
    cells[position].classList.add('yellow-skittle')
  }
  function addingCremeEgg(position) {
    cells[position].classList.add('creme-egg')
  }
  function addingCremeEggTwo(position) {
    cells[position].classList.add('creme-egg')
  }
  function addingGreenSkittle(position) {
    cells[position].classList.add('green-skittle')
  }
  function addingGreenSkittleTwo(position) {
    cells[position].classList.add('green-skittle')
  }

  // *ADDING FOOD*
  function removingPinkPartyRing(position) {
    cells[position].classList.remove('pink-party-ring')
  }
  function removingPinkPartyRingTwo(position) {
    cells[position].classList.remove('pink-party-ring')
  }
  function removingCustardCream(position) {
    cells[position].classList.remove('custard-cream')
  }
  function removingCustardCreamTwo(position) {
    cells[position].classList.remove('custard-cream')
  }
  function removingYellowPartyRing(position) {
    cells[position].classList.remove('yellow-party-ring')
  }
  function removingYellowPartyRingTwo(position) {
    cells[position].classList.remove('yellow-party-ring')
  }
  function removingEgg(position) {
    cells[position].classList.remove('egg')
  }
  function removingEggTwo(position) {
    cells[position].classList.remove('egg')
  }
  function removingHeart(position) {
    cells[position].classList.remove('heart')
  }
  function removingHeartTwo(position) {
    cells[position].classList.remove('heart')
  }
  function removingWorm(position) {
    cells[position].classList.remove('worm')
  }
  function removingWormTwo(position) {
    cells[position].classList.remove('worm')
  }
  function removingYellowSkittle(position) {
    cells[position].classList.remove('yellow-skittle')
  }
  function removingYellowSkittleTwo(position) {
    cells[position].classList.remove('yellow-skittle')
  }
  function removingCremeEgg(position) {
    cells[position].classList.remove('creme-egg')
  }
  function removingCremeEggTwo(position) {
    cells[position].classList.remove('creme-egg')
  }
  function removingGreenSkittle(position) {
    cells[position].classList.remove('green-skittle')
  }
  function removingGreenSkittleTwo(position) {
    cells[position].classList.remove('green-skittle')
  }

  // *MOVING FOOD*
  // pinkPartyRing
  let counterOne = 0
  let repeatOne

  function movingPinkPartyRing() {
    //clearInterval(repeat)
    counterOne = 0
    repeatOne = setInterval(addingRemovingPP, 200)
  }

  function addingRemovingPP() {
    if (pinkPartyRingCurrentPosition === 155) {
      clearInterval(repeatOne)
      removingPinkPartyRing(pinkPartyRingCurrentPosition)
      pinkPartyRingCurrentPosition = 143
      addingPinkPartyRing(pinkPartyRingCurrentPosition)
      movingPinkPartyRing()
      return
    }
    counterOne++
    if (counterOne < 13) {
      removingPinkPartyRing(pinkPartyRingCurrentPosition)
      pinkPartyRingCurrentPosition += 1
      addingPinkPartyRing(pinkPartyRingCurrentPosition)

    } else {
      removingPinkPartyRing(pinkPartyRingCurrentPosition)
      addingPinkPartyRing(pinkPartyRingStartPosition)
      clearInterval(repeatOne)
    }
  }

  // pinkPartyRingTwo
  let counterTwo = 0
  let repeatTwo

  function movingPinkPartyRingTwo() {
    //clearInterval(repeat)
    counterTwo = 0
    repeatTwo = setInterval(addingRemovingPPT, 200)
  }

  function addingRemovingPPT() {
    if (pinkPartyRingTwoCurrentPosition === 155) {
      clearInterval(repeatTwo)
      removingPinkPartyRingTwo(pinkPartyRingTwoCurrentPosition)
      pinkPartyRingTwoCurrentPosition = 143
      addingPinkPartyRingTwo(pinkPartyRingTwoCurrentPosition)
      movingPinkPartyRingTwo()
      return
    }
    counterTwo++
    if (counterTwo < 13) {
      removingPinkPartyRingTwo(pinkPartyRingTwoCurrentPosition)
      pinkPartyRingTwoCurrentPosition += 1
      addingPinkPartyRingTwo(pinkPartyRingTwoCurrentPosition)

    } else {
      removingPinkPartyRingTwo(pinkPartyRingTwoCurrentPosition)
      addingPinkPartyRingTwo(pinkPartyRingTwoStartPosition)
      clearInterval(repeatTwo)
    }
  }





  // ** EVENT LISTENERS **

  document.addEventListener('keyup', handleKeyUp) // listening for key press
  start.addEventListener('click', movingPinkPartyRing)
  start.addEventListener('click', movingPinkPartyRingTwo)
  start.addEventListener('click', movingCustardCream)
  start.addEventListener('click', movingCustardCreamTwo)
  // willyWonka.addEventListener('click', characterChange)
  // charlie.addEventListener('click', characterChange)
  // violet.addEventListener('click', characterChange)
  // oompaLoompa.addEventListener('click', characterChange)



  // ** CALLING FUNCTIONS **

  createGrid(characterStartPosition) //pass function to the starting position of the char


}

window.addEventListener('DOMContentLoaded', init)