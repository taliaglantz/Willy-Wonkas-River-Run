function init() {
  //console.log('JS working')

  // ** VARIABLES ** 

  // Grid

  const grid = document.querySelector('.grid') // get grid element
  const width = 13
  const height = 13
  const cellCount = width * height// total number of cells

  const cells = [] // empty array to store the divs that we create
  const start = document.querySelector('button')

  // Character

  const defaultCharacter = document.querySelector('.default-character')
  const characterStartPosition = 6
  let characterCurrentPosition = 6

  // const willyWonka = document.querySelector('.willy-wonka')
  // const charlie = document.querySelector('.charlie')
  // const violet = document.querySelector('.violet')
  // const oompaLoompa = document.querySelector('.oompa-loompa')

  // Rainbow belt

  const rainbowBelt = {
    item: 'rainbow belt',
    cssId: 'rainbow-belt',
    positions: 1
    //positions: [1,2]
    //positions: [0,1,2,3,4,5,6,7,8,9,10,11,12,52,53,54,55,56,57,58,59,60,61,62,63,64,104,105,106,107,108,109,110,112,113,114,115,116,156,157,158,159,160,161,162,163,164,165,166,167,168]
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
    }
  ]


  // ** FUNCTIONS FOR MAKING GRID AND ADDING CHARACTER & FOOD ITEMS **

  // Making grid

  function createGrid(characterStartPosition) {
    for (let i = 0; i < cellCount; i++) { // for loop to run for every cell
      const cell = document.createElement('div') // create the div
      //console.log(cell)
      cell.innerText = i // inner text of the div to be its index
      grid.appendChild(cell) // make the cell a child of the grid element we grabbed above
      cells.push(cell) // add the newly created div into our empty array
    }

    //console.log(filteredCells)

    sweetTreats.forEach(treat => {
      if (treat.order === 'first') {
        addFood(treat)
      }
      else if (treat.order === 'second') {
        addFood(treat)
      }
    })

    // rainbowBelt.positions.forEach((position) => {
    //   console.log(positions)
    // })





    //startMovement()
    addRainbowBelt()
    addCharacter(characterStartPosition) // call the function that adds the char to the starting position
  }
  const eachPlace = rainbowBelt.positions
  //console.log(eachPlace)
  function addRainbowBelt() {
    cells[eachPlace].setAttribute('id', '(rainbowBelt.cssId)')
  }
  //console.log(cells[eachPlace].id.add(rainbowBelt.cssId))



  // .forEach((place) => {
  //   console.log(place)
  //   // addRainbowBelt()
  //   //positions[place].id.add(rainbowBelt.cssId)
  // })





  // Add character to grid

  function addCharacter(position) { // takes argument so function is reusable
    //console.log(position)
    //console.log(cells[position])
    cells[position].classList.add('default-character') // use position as index to pick the corresponding div from the array of cells and add the class of char
  }

  //Remove character from grid
  function removeCharacter(position) {
    cells[position].classList.remove('default-character')
  }
  //function characterChange(event) {

  //   function addCharacter(position) {
  //     if (event.target.id = willyWonka) {
  //       cells[position].classList.add('willy-wonka')
  //     } else if (event.target.id = charlie) {
  //       cells[position].classList.add('charlie')
  //     } else if (event.target.id = violet) {
  //       cells[position].classList.add('violet')
  //     } else if (event.target.id = oompaLoompa) {
  //       cells[position].classList.add('oompa-loompa')
  //     } 
  //   }

  //   function removeCharacter(position) {
  //     if (event.target.id = willyWonka) {
  //       cells[position].classList.remove('willy-wonka')
  //     } else if (event.target.id = charlie) {
  //       cells[position].classList.remove('charlie')
  //     } else if (event.target.id = violet) {
  //       cells[position].classList.remove('violet')
  //     } else if (event.target.id = oompaLoompa) {
  //       cells[position].classList.remove('oompa-loompa')
  //     } 
  //   }

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

    //if (key === 39)



  }

  // function gameOver(event) {
  //   const key = event.keyCode
  //   alert('Hello')
  // }




  // add a food item to the grid
  function addFood(treat) {
    //console.log('treat', treat)
    cells[treat.currentPosition].classList.add(treat.cssClass)
  }

  // remove a food item from the grid
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

  // start movement of the food items
  function startMovement() {
    sweetTreats.forEach(treat => { // iterate through all the food items
      if (treat.order === 'first') { // check if the biscuit should come first
        treat.treatTimer = setInterval(() => moveFoods(treat), 1000) // set value of treatTimer to be id returned from setInterval and call function to move the food items 
      } else {
        setTimeout(() => { // delay start of the second set of food items
          addFood(treat) // add them at their starting positions
          treat.treatTimer = setInterval(() => moveFoods(treat), 1000)
        }, 3000) // determines how long before 2nd food item comes in
      }
    })
  }


  // Change characters

  // function characterChange(event) {
  //   console.log(event.target.id)
  //   if (event.target.id = willyWonka) {
  //     addCharacter(characterStartPosition)
  //   } else if (event.target.id = charlie) {
  //     addCharacter(characterStartPosition)
  //   } else if (event.target.id = violet) {
  //     addCharacter(characterStartPosition)
  //   } else if (event.target.id = oompaLoompa) {
  //     addCharacter(characterStartPosition)
  //   }
  // }

  //console.log(willyWonka)




  // ** EVENT LISTENERS **

  document.addEventListener('keyup', handleKeyUp) // listening for key press
  start.addEventListener('click', startMovement)
  //document.addEventListener('keyup', gameOver)


  // willyWonka.addEventListener('click', characterChange)
  // charlie.addEventListener('click', characterChange)
  // violet.addEventListener('click', characterChange)
  // oompaLoompa.addEventListener('click', characterChange)



  // ** CALLING FUNCTIONS **

  createGrid(characterStartPosition) //pass function to the starting position of the char
  //characterChange()
  //alert()

}


window.addEventListener('DOMContentLoaded', init)