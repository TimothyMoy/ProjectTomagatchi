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
// let rename = document.getElementById('user-name');
const statusBar = 10;
const pets = [];
const status = document.getElementsByClassName('text');
const statArr = [0,1,2,3,4,5,6,7,8,9]
let hungerIndex = 0
let sleepIndex = 0
let boredIndex = 0

//event listeners
//Start game button takes you to next screen
$('.startButton').click(function(){
  $('.startScreen').css("display","none");
  $('.characterButton').prop("disabled", true);
})

//Character Selection
$('.pet').one("click", function(){
  $('.pet').css("border","solid red 1px");
  $('.characterButton').prop("disabled", false);
  createForm();
})


//Chracter button starts the game
$('.characterButton').click(function(){
  $('.characterModal').css("display","none");
  //Starts Age counter
  startAge();
  //creates pets
  generatePets();
  //creates stat bar
  // generateStats();
  generateHunger();
  generateSleep();
  generateBored();
  //setName
  setName();
  //TEST
  hungerTimer();
  sleepTimer();
  boredTimer();
})

//Feed button test
$('#feed').click(function(){
  $( `.hungerStatus ${hungerIndex}` ).each(function() {
    if (hungerIndex < 10){
      let hungerNum = document.getElementById(`hunger${hungerIndex}`)
        hungerNum.classList.remove('test2');
        hungerNum.classList.add('test1');
    }
  });
});





//functions

//name change on start
function createForm() {
$('<form><label>Name: </label><input type="text" id="form" value="tomagotchi"></form>').insertAfter($('.pet'));
}
//setName
function setName(){
  document.getElementById('user-name').innerText = document.getElementById('form').value;
}

//rename
// function reName(){
//   document.getElementById('user-name').innerText = document.getElementById('form').value;
// }

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
      // $('#endGame').css("display","flex")
      // $('#endGame').append('<p>')
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
function generateHunger(){
  $('.hunger').append($("<ul class='hungerStatus'></ul>"));
  createHungerScale()
}

function generateSleep(){
  $('.sleepiness').append($("<ul class='sleepStatus'></ul>"));
  createSleepScale()
}

function generateBored(){
  $('.boredom').append($("<ul class='boredomStatus'></ul>"));
  createBoredScale()
}



function createHungerScale(){
  for (let a = 0; a < statArr.length; a++) {
      statArr[a] = document.createElement('div');
      statArr[a].id = "hunger" + a;
      statArr[a].classList.add("test1");
      $(".hungerStatus").append(statArr[a]);
  }
}

function createSleepScale(){
  for (let b = 0; b < statArr.length; b++) {
      statArr[b] = document.createElement('div');
      statArr[b].id = "sleep" + b;
      statArr[b].classList.add("test1");
      $(".sleepStatus").append(statArr[b]);
  }
}

function createBoredScale(){
  for (let c = 0; c < statArr.length; c++) {
      statArr[c] = document.createElement('div');
      statArr[c].id = "bored" + c;
      statArr[c].classList.add("test1");
      $(".boredomStatus").append(statArr[c]);
  }
}

function hungerTimer() {
setInterval(function (){
  if (hungerIndex < 10){
    let hungerNum = document.getElementById(`hunger${hungerIndex}`)
      // console.log(divNum);
      hungerNum.classList.remove('test1');
      hungerNum.classList.add('test2');
      hungerIndex+=1;
    } else {
    clearInterval(hungerIndex);
  }
},1000)
}

function boredTimer() {
setInterval(function (){
  if (boredIndex < 10){
    let boredNum = document.getElementById(`bored${boredIndex}`)
      // console.log(divNum);
      boredNum.classList.remove('test1');
      boredNum.classList.add('test2');
      boredIndex+=1;
    } else {
    clearInterval(boredIndex);
  }
},1000)
}

function sleepTimer() {
setInterval(function (){
  if (sleepIndex < 10){
    let sleepNum = document.getElementById(`sleep${sleepIndex}`)
      // console.log(divNum);
      sleepNum.classList.remove('test1');
      sleepNum.classList.add('test2');
      sleepIndex+=1;
    } else {
    clearInterval(sleepIndex);
  }
},1000)
}



// function generateStats(){
//   // console.log('this works');
//   for (let i = 0; i < status.length; i ++){
//     // console.log(status[i]);
//     if (status[i].innerText === "Hunger") {
//       $('.hunger').append($("<ul class='hungerStatus'></ul>"));
//       //separate cateogry
//       //take first div and add red by index
//     } else if (status[i].innerText === "Sleepiness"){
//         $('.sleepiness').append($("<ul class='sleepStatus'></ul>"));
//     } else {
//         $('.boredom').append($("<ul class='boredomStatus'></ul>"));
//     }
//   } createScale()
// }
