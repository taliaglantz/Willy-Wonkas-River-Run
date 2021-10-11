
  // const sweetTreats = [
  //   {   
  //     item: 'party ring',
  //     cssClass: 'party-ring',
  //     startPosition: 79,
  //     currentPosition: 79,
  //     direction: 'left',
  //     order: 'first',
  //     treatTimer: null
  //   },
  //   {   
  //     item: 'party ring',
  //     cssClass: 'party-ring',
  //     startPosition: 79,
  //     currentPosition: 79,
  //     direction: 'left',
  //     order: 'second',
  //     treatTimer: null
  //   },
  //   {   
  //     item: 'custard cream',
  //     cssClass: 'custard-creme',
  //     startPosition: 50,
  //     currentPosition: 50,
  //     direction: 'right',
  //     order: 'first',
  //     treatTimer: null
  //   },
  //   {   
  //     item: 'custard cream',
  //     cssClass: 'custard-creme',
  //     startPosition: 50,
  //     currentPosition: 50,
  //     direction: 'right',
  //     order: 'second',
  //     treatTimer: null
  //   }
  // ]


  // // * Make a grid
  // function createGrid() {
  //   for (let i = 0; i < cellCount; i++) { 
  //     const cell = document.createElement('div') 
  //     cell.innerText = i 
  //     grid.appendChild(cell) 
  //     cells.push(cell) 
  //   }
  //   // loop through all the treats, check the order and add to the grid
  //   sweetTreats.forEach(treat => {
  //     if (treat.order === 'first') {
  //       addBiscuit(treat)
  //     }
  //   })
  //   startMovement() // call function to start the movement
  // }

  // add a biscuit to the grid
  function addBiscuit(treat) {
    console.log('treat', treat)
    cells[treat.currentPosition].classList.add(treat.cssClass)
  }

  // remove a biscuit from the grid
  function removeBiscuit(treat) {
    cells[treat.currentPosition].classList.remove(treat.cssClass)
  }

  function moveBiscuits(treat) {
    removeBiscuit(treat)

    // these first 2 if statements are handling the biscuit reaching the edge
    if (treat.currentPosition % width === 0 && treat.direction === 'left') { // check if biscuit has reached the edge
      treat.currentPosition = treat.startPosition // put biscuit back to the start position
      addBiscuit(treat) // add biscuit back at the start position
      return // return here to stop rest of function running
    }
    if (treat.currentPosition % width === width - 1 && treat.direction === 'right') { // same as above for other side of the grid
      treat.currentPosition = treat.startPosition
      addBiscuit(treat)
      return
    }

    // this if statement is the default for the movement
    if (treat.direction === 'right') { //check direction of biscuit and update position accordingly
      treat.currentPosition++
    } else {
      treat.currentPosition--
    }

    addBiscuit(treat)
  }

  // start movement of the biscuits
  function startMovement() {
    sweetTreats.forEach(treat => { // iterate through all the biscuits
      if (treat.order === 'first') { // check if the biscuit should come first
        treat.treatTimer = setInterval(() => moveBiscuits(treat), 1000) // set value of treatTimer to be id returned from setInterval and call function to move the biscuits 
      } else {
        setTimeout(() => { // delay start of the second set of biscuits
          addBiscuit(treat) // add them at their starting positions
          treat.treatTimer = setInterval(() => moveBiscuits(treat), 1000)
        }, 3000) // determines how long before 2nd biscuit comes in
      }
    })
  }




  





  createGrid() // pass function the starting position of the cat
 







