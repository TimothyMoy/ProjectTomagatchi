// JS TEST
// console.log('hello');
// jQuery Test
// console.log($);


// ----------- Code Organization
//
// 1) 3rd party libraries
//   Anything we install
// 2) constants
// 3) app subtracted
// 4)cached Dom elements
// 5) or 6) event listeners
// 5) or 6) functions


class Pet {
  constructor(name,type,hunger,sleep,play,age) {
    this.name = name;
    this.type = type;
    this.hunger = hunger;
    this.sleep = sleep;
    this.age = age;
  }
}

// 2) constants
let age = 0;
const statusBar = 10;

//event listeners
$('.startButton').click(function(){
  $('.startScreen').css("display","none");
})

$('.characterButton').click(function(){
  $('.characterModal').css("display","none");
  //Starts Age counter
  startAge();
  //Starts status counter
  createSquares(squareCount);
})

//functions
//Starts Age
function startAge(){
  const ages = setInterval(function() {
    //Age less then 10 then counts up
    if (age < 10){
      age++;
      updateAge()
    } else {
      //need to create event to end game.
      //clearInterval ends loop
      clearInterval(ages);
    }
  }, 1000)
}
  function updateAge(){
    //updates UI
    //need to figure out how to not have UI shift up.
    document.getElementById('age').innerText = `Age ${age}`;
  }
