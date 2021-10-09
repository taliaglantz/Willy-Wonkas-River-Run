function init() {
  //console.log('JS working')

  // ** VARIABLES ** 
  const grid = document.querySelector('.grid') // get grid element
  const width = 20
  const height = 13
  const cellCount = width * height// total number of cells
  const cells = [] // empty array to store the divs that we create

  const character = document.querySelector('.character')
  const characterStartPosition = 10
  let characterCurrentPosition = 10

  const bourbon = document.querySelector('.bourbon')
  let bourbonStartPosition = 220

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
    //addBourbon(bourbonStartPosition)
  }

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
    addCharacter(characterCurrentPosition) // add character to the new position that was defined in the if statement above 
  }

  // ** FUNCTIONS FOR MOVING FOOD **


//   const bourbonCell = cells.[220]
//  console.log(bourbonCell)
  //function addBourbon(position) {
  //console.log(position)
  //console.log(cells[position])
  //cells[position].classList.add('bourbon')
  //}

  //function removeBourbon(position) {
  //cells[position].classList.remove('bourbon')
  //}


  const addingBourbon = setTimeout(() => {
    for (let i = 220; i > 239; i++) {

      function addBourbon(position) {
        cells[position].classList.add('bourbon')
      }
      addBourbon(bourbonStartPosition)
    }
  }, 20)

  console.log(addingBourbon)



  function moveBourbon() {





  }
  // const removingBourbon = setTimeout(() => {
  //   function removeBourbon(position) {
  //     cells[position].classList.add('bourbon')
  //   }
  // }, 20)

  // removeBourbon(bourbonStartPosition)





















  // ** EVENT LISTENERS **

  document.addEventListener('keyup', handleKeyUp) // listening for key press

  createGrid(characterStartPosition) //pass function to the starting position of the cat
  moveBourbon()















}

window.addEventListener('DOMContentLoaded', init)