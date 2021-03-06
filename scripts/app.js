function init() {


  //console.log('JS working')

  // ** VARIABLES ** 

  // Grid

  const grid = document.querySelector('.grid') // get grid element
  const width = 13
  const height = 13
  const cellCount = width * height// total number of cells
  const cells = [] // empty array to store the divs that we create

  // Buttons

  //const start = document.querySelector('.start')
  const easy = document.querySelector('#easy')
  const medium = document.querySelector('#medium')
  const hard = document.querySelector('#hard')

  const closeWindowWinner = document.querySelector('.close-window-winner')
  const playAgainWinner = document.querySelector('.restart-winner')
  const closeWindowLoser = document.querySelector('.close-window-loser')
  const playAgainLoser = document.querySelector('.restart-loser')



  // Character

  let character = 'violet'
  const characterStartPosition = 162
  let characterCurrentPosition = 162

  const characterChoice = document.querySelectorAll('.charImage')

  let preGame = true


  // Lives

  let lives = 3
  const lollipopOne = document.querySelector('#lollipop-one')
  const lollipopTwo = document.querySelector('#lollipop-two')
  const lollipopThree = document.querySelector('#lollipop-three')


  // Rainbow belt

  const rainbowBelt = {
    item: 'rainbow belt',
    cssId: 'rainbow-belt',
    positions: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 104, 105, 106, 107, 108, 109, 110, 111, 112, 113, 114, 115, 116, 156, 157, 158, 159, 160, 161, 162, 163, 164, 165, 166, 167, 168],
    positionsSuccess: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]
  }
  // console.log(rainbowBelt.positions)



  // Sweet Treats

  const sweetTreats = [
    {
      item: 'pink party ring',
      cssClass: 'pink-party-ring',
      startPosition: 143,
      currentPosition: 143,
      direction: 'right',
      order: 'first',
      treatTimer: null
    },
    {
      item: 'pink party ring',
      cssClass: 'pink-party-ring',
      startPosition: 143,
      currentPosition: 143,
      direction: 'right',
      order: 'second',
      treatTimer: null
    },
    {
      item: 'pink party ring',
      cssClass: 'pink-party-ring',
      startPosition: 143,
      currentPosition: 143,
      direction: 'right',
      order: 'third',
      treatTimer: null
    },
    {
      item: 'custard cream',
      cssClass: 'custard-cream',
      startPosition: 142,
      currentPosition: 142,
      direction: 'left',
      order: 'first',
      treatTimer: null
    },
    {
      item: 'custard cream',
      cssClass: 'custard-cream',
      startPosition: 142,
      currentPosition: 142,
      direction: 'left',
      order: 'second',
      treatTimer: null
    },
    {
      item: 'custard cream',
      cssClass: 'custard-cream',
      startPosition: 142,
      currentPosition: 142,
      direction: 'left',
      order: 'third',
      treatTimer: null
    },
    {
      item: 'yellow party ring',
      cssClass: 'yellow-party-ring',
      startPosition: 117,
      currentPosition: 117,
      direction: 'right',
      order: 'first',
      treatTimer: null
    },
    {
      item: 'yellow party ring',
      cssClass: 'yellow-party-ring',
      startPosition: 117,
      currentPosition: 117,
      direction: 'right',
      order: 'second',
      treatTimer: null
    },
    {
      item: 'yellow party ring',
      cssClass: 'yellow-party-ring',
      startPosition: 117,
      currentPosition: 117,
      direction: 'right',
      order: 'third',
      treatTimer: null
    },
    {
      item: 'egg',
      cssClass: 'egg',
      startPosition: 91,
      currentPosition: 91,
      direction: 'right',
      order: 'first',
      treatTimer: null
    },
    {
      item: 'egg',
      cssClass: 'egg',
      startPosition: 91,
      currentPosition: 91,
      direction: 'right',
      order: 'second',
      treatTimer: null
    },
    {
      item: 'egg',
      cssClass: 'egg',
      startPosition: 91,
      currentPosition: 91,
      direction: 'right',
      order: 'third',
      treatTimer: null
    },
    {
      item: 'heart',
      cssClass: 'heart',
      startPosition: 90,
      currentPosition: 90,
      direction: 'left',
      order: 'first',
      treatTimer: null
    },
    {
      item: 'heart',
      cssClass: 'heart',
      startPosition: 90,
      currentPosition: 90,
      direction: 'left',
      order: 'second',
      treatTimer: null
    },
    {
      item: 'heart',
      cssClass: 'heart',
      startPosition: 90,
      currentPosition: 90,
      direction: 'left',
      order: 'third',
      treatTimer: null
    },
    {
      item: 'worm',
      cssClass: 'worm',
      startPosition: 65,
      currentPosition: 65,
      direction: 'right',
      order: 'first',
      treatTimer: null
    },
    {
      item: 'worm',
      cssClass: 'worm',
      startPosition: 65,
      currentPosition: 65,
      direction: 'right',
      order: 'second',
      treatTimer: null
    },
    {
      item: 'worm',
      cssClass: 'worm',
      startPosition: 65,
      currentPosition: 65,
      direction: 'right',
      order: 'third',
      treatTimer: null
    },
    {
      item: 'yellow skittle',
      cssClass: 'yellow-skittle',
      startPosition: 39,
      currentPosition: 39,
      direction: 'right',
      order: 'first',
      treatTimer: null
    },
    {
      item: 'yellow skittle',
      cssClass: 'yellow-skittle',
      startPosition: 39,
      currentPosition: 39,
      direction: 'right',
      order: 'second',
      treatTimer: null
    },
    {
      item: 'yellow skittle',
      cssClass: 'yellow-skittle',
      startPosition: 39,
      currentPosition: 39,
      direction: 'right',
      order: 'third',
      treatTimer: null
    },
    {
      item: 'creme egg',
      cssClass: 'creme-egg',
      startPosition: 38,
      currentPosition: 38,
      direction: 'left',
      order: 'first',
      treatTimer: null
    },
    {
      item: 'creme egg',
      cssClass: 'creme-egg',
      startPosition: 38,
      currentPosition: 38,
      direction: 'left',
      order: 'second',
      treatTimer: null
    },
    {
      item: 'creme egg',
      cssClass: 'creme-egg',
      startPosition: 38,
      currentPosition: 38,
      direction: 'left',
      order: 'third',
      treatTimer: null
    },
    {
      item: 'green skittle',
      cssClass: 'green-skittle',
      startPosition: 13,
      currentPosition: 13,
      direction: 'right',
      order: 'first',
      treatTimer: null
    },
    {
      item: 'green skittle',
      cssClass: 'green-skittle',
      startPosition: 13,
      currentPosition: 13,
      direction: 'right',
      order: 'second',
      treatTimer: null
    },
    {
      item: 'green skittle',
      cssClass: 'green-skittle',
      startPosition: 13,
      currentPosition: 13,
      direction: 'right',
      order: 'third',
      treatTimer: null
    }
  ]


  // ** FUNCTIONS **

  // Making grid

  function createGrid(characterStartPosition) {
    //document.getElementsByClassName('.alert-box-game-over alert-box-successful').style.visibility = 'hidden'
    for (let i = 0; i < cellCount; i++) { // for loop to run for every cell
      const cell = document.createElement('div') // create the div
      //console.log(cell)
      //cell.innerText = i // inner text of the div to be its index
      grid.appendChild(cell) // make the cell a child of the grid element we grabbed above
      cells.push(cell) // add the newly created div into our empty array


    }


    sweetTreats.forEach(treat => {
      if (treat.order === 'first') {
        addFood(treat)
      } else if (treat.order === 'second') {
        addFood(treat)
      } else if (treat.order === 'third') {
        addFood(treat)
      }
    })

    addRainbowBelt()
    addCharacter(characterStartPosition)
  }



  // Add character to grid

  function addCharacter(position) { // takes argument so function is reusable
    //console.log(position)
    //console.log(cells[position])
    //console.log(character)
   
    cells[position].classList.add(character)
  }

  //Remove character from grid

  function removeCharacter(position) {

    cells[position].classList.remove(character)
  }



  function chooseCharacter(event) {
    //console.log(event)
    if (preGame) {
      character = event.target.id // character is an id that represents a string
      cells[characterStartPosition].classList.replace('charlie', character)
      cells[characterStartPosition].classList.replace('violet', character)
      cells[characterStartPosition].classList.replace('willy-wonka', character)
      cells[characterStartPosition].classList.replace('oompa-loompa', character)
      console.log(character)
    }
  }


  // Moving character around the grid

  function handleKeyUp(event) {


    if (!preGame) {
      const key = event.keyCode
      //console.log('position before moving', characterCurrentPosition)
      removeCharacter(characterCurrentPosition)

      if ((key === 39 && characterCurrentPosition % width !== width - 1)) { // if the right arrow is pressed and the character is not on the right edge
        characterCurrentPosition++ // redefine character position index to be previous position plus 1
      } else if ((key === 37 && characterCurrentPosition % width !== 0)) { // if the left arrow is pressed and the cat is not on the left edge
        characterCurrentPosition-- // redefine character position index to be previous position minus 1
      } else if ((key === 38 && characterCurrentPosition >= width)) { // if the up arrow is pressed and the character is not on the top row
        characterCurrentPosition -= width // redefine cacharactert position index to be previous position minus width
      } else if ((key === 40 && characterCurrentPosition + width <= width * height - 1)) { // if the down arrow is pressed and the character is not on the bottom row
        characterCurrentPosition += width // redefine character position index to be previous position plus width
      } else {
        //console.log('INVALID KEY') // any other key, log invalid key
      }
      //console.log('POSITION AFTER REDEFINING --->', characterCurrentPosition)
      addCharacter(characterCurrentPosition)
    }

    if (characterInRiver()) {
      loseLife()
      
    }

    if (rainbowBelt.positionsSuccess.includes(characterCurrentPosition)) {
      winning()
    }
  }
  //console.log(characterCurrentPosition)



  // Add rainbow belt

  function addRainbowBelt() {
    rainbowBelt.positions.forEach((position) => {
      //console.log(position)
      cells[position].setAttribute('id', 'rainbow-belt')
      //console.log(cells[position])
    })
    //console.log(rainbowBeltCells)
  }

  // Add a food item to the grid

  function addFood(treat) {
    //console.log('treat', treat)
    cells[treat.currentPosition].classList.add(treat.cssClass)
  }

  // Remove a food item from the grid

  function removeFood(treat) {
    cells[treat.currentPosition].classList.remove(treat.cssClass)
  }

  // Move food items around grid

  function moveFoods(treat) {
    const charactersOnTreat = characterCurrentPosition === treat.currentPosition // returns true or false

    removeFood(treat)
    if (charactersOnTreat) {
      removeCharacter(characterCurrentPosition)
    }
    // these first 2 if statements are handling the food item reaching the edge
    if (treat.currentPosition % width === 0 && treat.direction === 'left') { // check if food item has reached the edge
      treat.currentPosition = treat.startPosition // put food item back to the start position
      addFood(treat) // add food item back at the start position
      if (charactersOnTreat) {
        loseLife()
       

      }
      return // return here to stop rest of function running
    }
    if (treat.currentPosition % width === width - 1 && treat.direction === 'right') { // same as above for other side of the grid
      treat.currentPosition = treat.startPosition
      addFood(treat)
      if (charactersOnTreat) {
        loseLife()
        

      }
      return

    }

    // this if statement is the default for the movement
    if (treat.direction === 'right') { //check direction of food item and update position accordingly
      treat.currentPosition++
      if (charactersOnTreat) {
        characterCurrentPosition++
      }
    } else {
      treat.currentPosition--
      if (charactersOnTreat) {
        characterCurrentPosition--
      }
    }

    addFood(treat)
    if (charactersOnTreat) {
      addCharacter(characterCurrentPosition)
    }
  }

  // start movement of the food items - various levels
  function startMovementEasy() {
    sweetTreats.forEach(treat => { // iterate through all the food items
      if (treat.order === 'first') { // check if the food item should come first
        treat.treatTimer = setInterval(() => moveFoods(treat), 1000) // set value of treatTimer to be id returned from setInterval and call function to move the food items 
      } else if (treat.order === 'second') {
        setTimeout(() => { // delay start of the second set of food items
          addFood(treat) // add them at their starting positions
          treat.treatTimer = setInterval(() => moveFoods(treat), 1000)
        }, 4000) // determines how long before 2nd food item comes in
      } else if (treat.order === 'third') {
        setTimeout(() => { // delay start of the second set of food items
          addFood(treat) // add them at their starting positions
          treat.treatTimer = setInterval(() => moveFoods(treat), 1000)
        }, 8000) // determines how long before 2nd food item comes in
      }
    })
  }
  function startMovementMedium() {
    sweetTreats.forEach(treat => { // iterate through all the food items
      if (treat.order === 'first') { // check if the food item should come first
        treat.treatTimer = setInterval(() => moveFoods(treat), 750) // set value of treatTimer to be id returned from setInterval and call function to move the food items 
      } else if (treat.order === 'second') { // check if the food item should come second
        setTimeout(() => { // delay start of the second set of food items
          addFood(treat) // add them at their starting positions
          treat.treatTimer = setInterval(() => moveFoods(treat), 750)
        }, 3000) // determines how long before 2nd food item comes in
      } else {
        setTimeout(() => { // delay start of the second set of food items
          addFood(treat) // add them at their starting positions
          treat.treatTimer = setInterval(() => moveFoods(treat), 750)
        }, 6000) // determines how long before 2nd food item comes in
      }
    })
  }
  function startMovementHard() {
    sweetTreats.forEach(treat => { // iterate through all the food items
      if (treat.order === 'first') { // check if the food item should come first
        treat.treatTimer = setInterval(() => moveFoods(treat), 500) // set value of treatTimer to be id returned from setInterval and call function to move the food items 
      } else if (treat.order === 'second') { // check if the food item should come second
        setTimeout(() => { // delay start of the second set of food items
          addFood(treat) // add them at their starting positions
          treat.treatTimer = setInterval(() => moveFoods(treat), 500)
        }, 2500) // determines how long before 2nd food item comes in
      } else {
        setTimeout(() => { // delay start of the second set of food items
          addFood(treat) // add them at their starting positions
          treat.treatTimer = setInterval(() => moveFoods(treat), 500)
        }, 5000) // determines how long before 2nd food item comes in
      }
    })
  }

  // Timer

  
  let counterTimer = 0;
  let myInterval
  function startTimer() {
    if (counterTimer === 0) {
      preGame = false
      counterTimer = 1;
      const myBar = document.getElementById("myBar");
      let height = 1;

      myInterval = setInterval(myTimer, 150);
      function myTimer() {
        if (height >= 100) {
          clearInterval(myInterval)
          counterTimer = 0
          //loseLife()
          //startTimer()
          losing()
        } else {
          height += .5
          myBar.style.height = height + '%'
          //console.log(height)
        }
      
      }
    }
  }

  // Losing lives

  function loseLife() {

    removeCharacter(characterCurrentPosition)
    characterCurrentPosition = characterStartPosition
    addCharacter(characterCurrentPosition)
    lives--
    removeLollipop()
  }

  // Character falling in river

  function characterInRiver() { // boolean function if return + &&/||
    return cells[characterCurrentPosition].getAttribute('id') !== 'rainbow-belt' && cells[characterCurrentPosition].classList.length === 1
  }


  function removeLollipop() {
    if (lives === 2) {
      lollipopOne.style.display = 'none'
    } else if (lives === 1) {
      lollipopTwo.style.display = 'none'
    } else if (lives === 0) {
      lollipopThree.style.display = 'none'
      //alert('Game over')
      losing()

    }
  }

  // character crossing successfully

  function characterCrossesSuccessfully() {
    return rainbowBelt.positionsSuccess.includes(characterCurrentPosition)
    //console.log(rainbowBelt.positions[6])
  }

  
  // Winning and losing screens

  const section = document.querySelector('section')
  const winDiv = document.querySelector('.alert-box-successful')
  const loseDiv = document.querySelector('.alert-box-game-over')

  // Winning screen

  function winning() {

    section.classList.add('none')
    winDiv.style.visibility = 'visible'
  }

  // Losing Screen

  function losing() {
    section.classList.add('none')
    loseDiv.style.visibility = 'visible'
  }

  // Play again

  function reload(event) {
    //console.log(event)
    location.reload(event)
  }

  // Window close

  function byeByeGame(event) {
    window.close(event)
  }


  // ** EVENT LISTENERS **

  document.addEventListener('keyup', handleKeyUp) // listening for key press

  //start.addEventListener('click', startMovementEasy)

  easy.addEventListener('click', startMovementEasy)
  medium.addEventListener('click', startMovementMedium)
  hard.addEventListener('click', startMovementHard)

  

  easy.addEventListener('click', startTimer)
  medium.addEventListener('click', startTimer)
  hard.addEventListener('click', startTimer)

  characterChoice.forEach((char) => {
    char.addEventListener('click', chooseCharacter)
  })


  closeWindowWinner.addEventListener('click', byeByeGame)
  playAgainWinner.addEventListener('click', reload)
  closeWindowLoser.addEventListener('click', byeByeGame)
  playAgainLoser.addEventListener('click', reload)



  // ** CALLING FUNCTIONS **

  createGrid(characterStartPosition) //pass function to the starting position of the char

}

window.addEventListener('DOMContentLoaded', init)