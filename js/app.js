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
const status = document.getElementsByClassName('text');
// let hunger = document.getElementsByClassName('scale');
const sleepiness = [0,1,2,3,4,5,6,7,8,9]
const boredom = [0,1,2,3,4,5,6,7,8,9]


//event listeners
//Start game button takes you to next screen
$('.startButton').click(function(){
  $('.startScreen').css("display","none");
  $('.characterButton').prop("disabled", true);
})

$('.pet').one("click", function(){
  $('.pet').css("border","solid red 1px");
  $('.characterButton').prop("disabled", false);
  createForm();
  updateAge();
})


//Chracter select button starts the game
$('.characterButton').click(function(){
  $('.characterModal').css("display","none");
  //Starts Age counter
  startAge();
  //creates pets
  generatePets();
  //creates stat bar
  generateStats();
  //starts stat counter

  // startHunger();
})

$('#feed').click(function(){

  $('.hungerStatus li .scale').eq(0).css("background-color","red");

    $('.hungerStatus li .scale').eq(10).css("background-color","red");
  console.log('this works');
})

//functions

//name change on start
function createForm() {
$('<form><label>Name: </label><input type="text" value="tomagotchi"></form>').insertAfter($('.pet'));
}

//updates name
function updateAge(){
  //updates UI
  $("form").submit(function(event){
    console.log('this works');
  })
}


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

  // //Starts status
  // function startHunger(){
  //   const newHunger = setInterval(function() {
  //     //Age less then 10 then counts up
  //     if (hunger < 10){
  //       hunger++;
  //       updatehunger()
  //     } else {
  //       //need to create event to end game.
  //       //clearInterval ends loop
  //       clearInterval(hunger);
  //     }
  //   }, 1000)
  // }
  //   function updatehunger(){
  //     //updates UI
  //   $('.status ul li .scale').eq(0).css("background-color","red");
  //   console.log('thisworks');
  //   }


//pet
function generatePets(){
  const newPet = new Pet("dog");
  $('<div id="dog"></div>').appendTo('#game');
  document.getElementById('dog').innerText = `This is a ${newPet.type}`;
  document.getElementById('dog').animate([
    //keyframes
    { transform: 'translateY(0px)'},
    { transform: 'translateX(200px)'},
      { transform: 'translateY(0px)'},
    { transform: 'translateX(-200px)'},
      { transform: 'translateY(0px)'},
  ],{
    //timing options
    duration: 4000,
    iterations: Infinity
    });
}

//status
function generateStats(){
  // console.log('this works');
  for (let i = 0; i < status.length; i ++){
    // console.log(status[i]);
    if (status[i].innerText === "Hunger") {
      $('.hunger').append($("<ul class='hungerStatus'></ul>"));
      //separate cateogry
      //take first div and add red by index
    } else if (status[i].innerText === "Sleepiness"){
        $('.sleepiness').append($("<ul class='sleepStatus'></ul>"));
    } else {
        $('.boredom').append($("<ul class='boredomStatus'></ul>"));
    }
  } createScale()
}

function createScale(){
  for (let j = 0; j < 10; j++) {
      $('ul').append($("<li><div class='scale'></div></li>"));
  }
}
