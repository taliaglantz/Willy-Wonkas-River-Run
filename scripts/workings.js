
  
  // function movingFood() {
  //   //console.log('hello')
  //   const foodTimer = setInterval(() => {
  //     removingPinkPartyRing(pinkPartyRingStartPosition)
  //     addingPinkPartyRing(pinkPartyRingCurrentPosition)
  //     removingPinkPartyRing(pinkPartyRingCurrentPosition)
  //     if (pinkPartyRingCurrentPosition % width !== width - 1) {
  //       pinkPartyRingCurrentPosition += 1
  //       addingPinkPartyRing(pinkPartyRingCurrentPosition)
  //     } else {
  //       removingPinkPartyRing(pinkPartyRingCurrentPosition)
  //       addingPinkPartyRing(pinkPartyRingStartPosition)
  //     }

  //   }, 500)
  // }




  // **TEST**

  // var animate
  // // .bourbon.style.position = 'relative'
  // bourbon.style.left = '0px'

  // function moveRight() {
  //   bourbon.style.left = parseInt(bourbon.style.left) + 10 + 'px'
  //   animate = setTimeout(moveRight, 20)    // call moveRight in 20msec
  // }
  // function stop() {
  //   clearTimeout(animate)
  //   bourbon.style.left = '0px'
  // }



  // const addBourbon = setTimeout(() => {
  //   function addingBourbon(position) {
  //     cells[position].classList.add('bourbon')
  //   }
  //   addingBourbon(bourbonCurrentPosition)
  // }, 2000)

  //*REMOVING BOURBON*
  // function removingBourbon(position) {
  // cells[position].classList.remove('bourbon')
  // }

  // const removeBourbon = setTimeout(() => {
  //   function removingBourbon(position) {
  //     cells[position].classList.add('bourbon')
  //   }
  //   removingBourbon(bourbonCurrentPosition)
  // }, 2000)



  // TEST
  // function sayHello() {
  //   for (let i = 0; i < 10; i++) {
  //     console.log('hello')
  //   }
  // }


  // let i = bourbonCurrentPosition

  // function moveBourbon() {

  //   removeBourbon
  //   //console.log(bourbonCurrentPosition)
  //   for (let i = 0; i < width - 1; i++) {
  //     bourbonCurrentPosition++
  //   }
  //   addBourbon
  //   //console.log(bourbonCurrentPosition)

  // }

  // function moveBourbon() {
  //   for (let i = 0; i < width - 1; i++) {
  //     addingBourbon(bourbonCurrentPosition)
  //   }
  // }


  // let i = bourbonCurrentPosition
  //   function moveBourbon(bourbonStartPosition) {

  //     removeBourbon
  //     //console.log(removeBourbon)
  //     for (let i = 0; i < width; i++) {
  //       i++
  //     }
  //     addBourbon
  //     console.log(addBourbon)
  //   }






  // const pinkPartyRing = document.querySelector('.pink-party-ring')
  // const pinkPartyRingStartPosition = 143
  // let pinkPartyRingCurrentPosition = 143
  // const pinkPartyRingTwo = document.querySelector('.pink-party-ring')
  // const pinkPartyRingTwoStartPosition = 147
  // let pinkPartyRingTwoCurrentPosition = 147

  // const custardCream = document.querySelector('.custard-cream')
  // const custardCreamStartPosition = 142
  // let custardCreamCurrentPosition = 142

  // const custardCreamTwo = document.querySelector('.custard-cream')
  // const custardCreamTwoStartPosition = 138
  // let custardCreamTwoCurrentPosition = 138

  // const yellowPartyRing = document.querySelector('.yellow-party-ring')
  // const yellowPartyRingStartPosition = 117
  // let yellowPartyRingCurrentPosition = 117

  // const egg = document.querySelector('.egg')
  // const eggStartPosition = 91
  // let eggCurrentPosition = 91

  // const heart = document.querySelector('.heart')
  // const heartStartPosition = 90
  // let heartCurrentPosition = 90

  // const worm = document.querySelector('.worm')
  // const wormStartPosition = 65
  // let wormCurrentPosition = 65

  // const yellowSkittle = document.querySelector('.skittle-yellow')
  // const yellowSkittleStartPosition = 39
  // let yellowSkittleCurrentPosition = 39

  // const cremeEgg = document.querySelector('.creme-egg')
  // const cremeEggStartPosition = 38
  // let cremeEggCurrentPosition = 38

  // const greenSkittle = document.querySelector('.skittle-green')
  // const greenSkittleStartPosition = 13
  // let greenSkittleCurrentPosition = 13


  // addingPinkPartyRing(pinkPartyRingStartPosition)
    // addingPinkPartyRingTwo(pinkPartyRingTwoStartPosition)

    // addingCustardCream(custardCreamStartPosition)
    // addingCustardCreamTwo(custardCreamTwoStartPosition)

    // addingYellowPartyRing(yellowPartyRingStartPosition)
    // addingEgg(eggStartPosition)
    // addingHeart(heartStartPosition)
    // addingWorm(wormStartPosition)
    // addingYellowSkittle(yellowSkittleStartPosition)
    // addingCremeEgg(cremeEggStartPosition)
    // addingGreenSkittle(greenSkittleStartPosition)


    // ** FUNCTIONS FOR MOVING FOOD **

  // *ADDING FOOD*
  // function addingPinkPartyRing(position) {
  //   cells[position].classList.add('pink-party-ring')
  // }
  // function addingPinkPartyRingTwo(position) {
  //   cells[position].classList.add('pink-party-ring')
  // }
  // function addingCustardCream(position) {
  //   cells[position].classList.add('custard-cream')
  // }
  // function addingCustardCreamTwo(position) {
  //   cells[position].classList.add('custard-cream')
  // }
  // function addingYellowPartyRing(position) {
  //   cells[position].classList.add('yellow-party-ring')
  // }
  // function addingYellowPartyRingTwo(position) {
  //   cells[position].classList.add('yellow-party-ring')
  // }
  // function addingEgg(position) {
  //   cells[position].classList.add('egg')
  // }
  // function addingEggTwo(position) {
  //   cells[position].classList.add('egg')
  // }
  // function addingHeart(position) {
  //   cells[position].classList.add('heart')
  // }
  // function addingHeartTwo(position) {
  //   cells[position].classList.add('heart')
  // }
  // function addingWorm(position) {
  //   cells[position].classList.add('worm')
  // }
  // function addingWormTwo(position) {
  //   cells[position].classList.add('worm')
  // }
  // function addingYellowSkittle(position) {
  //   cells[position].classList.add('yellow-skittle')
  // }
  // function addingYellowSkittleTwo(position) {
  //   cells[position].classList.add('yellow-skittle')
  // }
  // function addingCremeEgg(position) {
  //   cells[position].classList.add('creme-egg')
  // }
  // function addingCremeEggTwo(position) {
  //   cells[position].classList.add('creme-egg')
  // }
  // function addingGreenSkittle(position) {
  //   cells[position].classList.add('green-skittle')
  // }
  // function addingGreenSkittleTwo(position) {
  //   cells[position].classList.add('green-skittle')
  // }

  // *REMOVING FOOD*
  // function removingPinkPartyRing(position) {
  //   cells[position].classList.remove('pink-party-ring')
  // }
  // function removingPinkPartyRingTwo(position) {
  //   cells[position].classList.remove('pink-party-ring')
  // }
  // function removingCustardCream(position) {
  //   cells[position].classList.remove('custard-cream')
  // }
  // function removingCustardCreamTwo(position) {
  //   cells[position].classList.remove('custard-cream')
  // }
  // function removingYellowPartyRing(position) {
  //   cells[position].classList.remove('yellow-party-ring')
  // }
  // function removingYellowPartyRingTwo(position) {
  //   cells[position].classList.remove('yellow-party-ring')
  // }
  // function removingEgg(position) {
  //   cells[position].classList.remove('egg')
  // }
  // function removingEggTwo(position) {
  //   cells[position].classList.remove('egg')
  // }
  // function removingHeart(position) {
  //   cells[position].classList.remove('heart')
  // }
  // function removingHeartTwo(position) {
  //   cells[position].classList.remove('heart')
  // }
  // function removingWorm(position) {
  //   cells[position].classList.remove('worm')
  // }
  // function removingWormTwo(position) {
  //   cells[position].classList.remove('worm')
  // }
  // function removingYellowSkittle(position) {
  //   cells[position].classList.remove('yellow-skittle')
  // }
  // function removingYellowSkittleTwo(position) {
  //   cells[position].classList.remove('yellow-skittle')
  // }
  // function removingCremeEgg(position) {
  //   cells[position].classList.remove('creme-egg')
  // }
  // function removingCremeEggTwo(position) {
  //   cells[position].classList.remove('creme-egg')
  // }
  // function removingGreenSkittle(position) {
  //   cells[position].classList.remove('green-skittle')
  // }
  // function removingGreenSkittleTwo(position) {
  //   cells[position].classList.remove('green-skittle')
  // }

  // *MOVING FOOD*
  // pinkPartyRing
  // let counterOne = 0
  // let repeatOne

  // function movingPinkPartyRing() {
  //   //clearInterval(repeat)
  //   counterOne = 0
  //   repeatOne = setInterval(addingRemovingPP, 200)
  // }

  // function addingRemovingPP() {
  //   if (pinkPartyRingCurrentPosition === 155) {
  //     clearInterval(repeatOne)
  //     removingPinkPartyRing(pinkPartyRingCurrentPosition)
  //     pinkPartyRingCurrentPosition = 143
  //     addingPinkPartyRing(pinkPartyRingCurrentPosition)
  //     movingPinkPartyRing()
  //     return
  //   }
  //   counterOne++
  //   if (counterOne < 13) {
  //     removingPinkPartyRing(pinkPartyRingCurrentPosition)
  //     pinkPartyRingCurrentPosition += 1
  //     addingPinkPartyRing(pinkPartyRingCurrentPosition)

  //   } else {
  //     removingPinkPartyRing(pinkPartyRingCurrentPosition)
  //     addingPinkPartyRing(pinkPartyRingStartPosition)
  //     clearInterval(repeatOne)
  //   }
  // }

  // pinkPartyRingTwo
  // let counterTwo = 0
  // let repeatTwo

  // function movingPinkPartyRingTwo() {
  //   //clearInterval(repeat)
  //   counterTwo = 0
  //   repeatTwo = setInterval(addingRemovingPPT, 200)
  // }

  // function addingRemovingPPT() {
  //   if (pinkPartyRingTwoCurrentPosition === 155) {
  //     clearInterval(repeatTwo)
  //     removingPinkPartyRingTwo(pinkPartyRingTwoCurrentPosition)
  //     pinkPartyRingTwoCurrentPosition = 143
  //     addingPinkPartyRingTwo(pinkPartyRingTwoCurrentPosition)
  //     movingPinkPartyRingTwo()
  //     return
  //   }
  //   counterTwo++
  //   if (counterTwo < 13) {
  //     removingPinkPartyRingTwo(pinkPartyRingTwoCurrentPosition)
  //     pinkPartyRingTwoCurrentPosition += 1
  //     addingPinkPartyRingTwo(pinkPartyRingTwoCurrentPosition)

  //   } else {
  //     removingPinkPartyRingTwo(pinkPartyRingTwoCurrentPosition)
  //     addingPinkPartyRingTwo(pinkPartyRingTwoStartPosition)
  //     clearInterval(repeatTwo)
  //   }
  // }