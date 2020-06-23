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
  constructor(type,name,hunger,sleep,play,age) {
    this.type = type;
    this.name = name;
    this.hunger = hunger;
    this.sleep = sleep;
    this.age = age;
  }
}

// 2) constants
let age = 0;
const statusBar = 10;
const pets = [];
const status = ["Hunger","Sleepiness","Boredom"];

//event listeners
//Start game button takes you to next screen
$('.startButton').click(function(){
  $('.startScreen').css("display","none");
  $('.characterButton').prop("disabled", true);
})

$('.pet').click(function(){
  $('.pet').css("border","solid red 1px");
  $('.characterButton').prop("disabled", false);
})

//Chracter select button starts the game
$('.characterButton').click(function(){
  $('.characterModal').css("display","none");
  //Starts Age counter
  startAge();
  //creates pets
  generatePets();
  //Starts status counter
  generateStats();
})

// $('#feed').click(function(){
//   $('.startScreen').css("display","none");
//   $('.characterButton').prop("disabled", true);
// })

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
    document.getElementById('age').innerText = `Age ${age}`;
  }

//pet
function generatePets(){
  const newPet = new Pet("dog");
  $('<div id="dog"></div>').appendTo('#game');
  document.getElementById('dog').innerText = `This is a ${newPet.type}`;
  document.getElementById('dog').animate([
    //keyframes
    // { transform: 'translateY(0px)'},
    { transform: 'translateX(200px)'},
    { transform: 'translateX(-200px)'},
    { transform: 'translateX(200px)'},
  ],{
    //timing options
    duration: 4000,
    iterations: Infinity
    });
}

//status
function generateStats(){
  console.log('this works');
  for (let i = 0; i < status.length; i ++){
    console.log(status[i]);
    if (status[i] === "Hunger") {
      createScale()
    }
  }
}

function createScale(){
  for (let j = 0; j < 10; j++) {
      $('.status').append($("<div class='scale'></div>"));
  }
}
