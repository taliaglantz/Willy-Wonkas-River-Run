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
    }
  ]


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
    //function addRainbowBelt() {
    //const position = cells[position].innerText
    //   const filteredCells = cells.filter((cells[position].innerText) => {
    //     if (cells[position].innerText <= 12 && (cells[position].innerText >= 52 && cells[position].innerText <= 64) && (cells[position].innerText] >= 104 && cells[position].innerText <= 116) && cells[position].innerText >= 156) {
    //       return filteredCells
    //     }
    //   })
    // }
    //console.log(filteredCells)



    sweetTreats.forEach(treat => {
      if (treat.order === 'first') {
        addFood(treat)
      }
      else if (treat.order === 'second') {
        addFood(treat)
      }
    })
    startMovement()
    addCharacter(characterStartPosition) // call the function that adds the char to the starting position
    


  }
  // Add rainbow belt

  // function filteringCells(cells) {
  //     const filteredCells = cells.filter((position) => {
  //       if (position <= 12 && (position >= 52 && position <= 64) && (position >= 104 && position <= 116) && position >= 156) {
  //         return position
  //       }
  //     })


  // const filteredCells = cells.filter((cells[position]) => {
  //       if (cells[position] <= 12 && (cells[position] >= 52 && cells[position] <= 64) && (cells[position] >= 104 && cells[position] <= 116) && cells[position] >= 156) {
  //         return cells[position]
  //       } 
  //        })


  // Add character to grid

  function addCharacter(position) { // takes argument so function is reusable
    //console.log(position)
    //console.log(cells[position])
    cells[position].classList.add('character') // use position as index to pick the corresponding div from the array of cells and add the class of char
  }

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

  // add a biscuit to the grid
  function addFood(treat) {
    //console.log('treat', treat)
    cells[treat.currentPosition].classList.add(treat.cssClass)
  }

  // remove a Food from the grid
  function removeFood(treat) {
    cells[treat.currentPosition].classList.remove(treat.cssClass)
  }

  function moveFoods(treat) {
    removeFood(treat)

    // these first 2 if statements are handling the food item reaching the edge
    if (treat.currentPosition % width === 0 && treat.direction === 'left') { // check if food item has reached the edge
      treat.currentPosition = treat.startPosition // put food item back to the start position
      addFood(treat) // add food item back at the start position
      return // return here to stop rest of function running
    }
    if (treat.currentPosition % width === width - 1 && treat.direction === 'right') { // same as above for other side of the grid
      treat.currentPosition = treat.startPosition
      addFood(treat)
      return
    }

    // this if statement is the default for the movement
    if (treat.direction === 'right') { //check direction of biscuit and update position accordingly
      treat.currentPosition++
    } else {
      treat.currentPosition--
    }

    addFood(treat)
  }

  // start movement of the biscuits
  function startMovement() {
    sweetTreats.forEach(treat => { // iterate through all the biscuits
      if (treat.order === 'first') { // check if the biscuit should come first
        treat.treatTimer = setInterval(() => moveFoods(treat), 1000) // set value of treatTimer to be id returned from setInterval and call function to move the biscuits 
      } else {
        setTimeout(() => { // delay start of the second set of biscuits
          addFood(treat) // add them at their starting positions
          treat.treatTimer = setInterval(() => moveFoods(treat), 1000)
        }, 3000) // determines how long before 2nd biscuit comes in
      }
    })
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


  





  // ** EVENT LISTENERS **

  document.addEventListener('keyup', handleKeyUp) // listening for key press
  start.addEventListener('click', startMovement)
  //start.addEventListener('click', movingPinkPartyRingTwo)
  //start.addEventListener('click', movingCustardCream)
  //start.addEventListener('click', movingCustardCreamTwo)

  // willyWonka.addEventListener('click', characterChange)
  // charlie.addEventListener('click', characterChange)
  // violet.addEventListener('click', characterChange)
  // oompaLoompa.addEventListener('click', characterChange)



  // ** CALLING FUNCTIONS **

  createGrid(characterStartPosition) //pass function to the starting position of the char

}


window.addEventListener('DOMContentLoaded', init)