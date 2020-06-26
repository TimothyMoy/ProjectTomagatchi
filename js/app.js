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
  $('.pet').css("box-shadow","0px 2px 2px rgba(0, 0, 0, 0.5)");
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
  generateHunger();
  generateSleep();
  generateBored();
  //setName
  setName();
  //status time
  hungerTimer();
  boredTimer();
  sleepTimer();

})

//Feed button test
$('#feed').click(function(){
  if (hungerIndex < 10 && hungerIndex > 0){
    let hungerNum = document.getElementById(`hunger${hungerIndex}`)
    hungerNum.classList.remove('statusOn');
    hungerNum.classList.add('statusOff');
    hungerIndex-=1;
  }
});

$('#lights').click(function(){
  if (sleepIndex < 10 && sleepIndex > 0){
    let sleepNum = document.getElementById(`sleep${sleepIndex}`)
    sleepNum.classList.remove('statusOn');
    sleepNum.classList.add('statusOff');
    sleepIndex-=1;
  }
});

$('#play').click(function(){
  if (boredIndex < 10 && boredIndex > 0){
    let boredNum = document.getElementById(`bored${boredIndex}`)
    boredNum.classList.remove('statusOn');
    boredNum.classList.add('statusOff');
    boredIndex-=1;
  }
});

//rename
$('#rename').click(function(){
  $('#renameCover').css("display","block");
  renameForm();
});

$('.renameButton').click(function(){
  $('#renameCover').css("display","none");
  setNewName();
});

//endgame
$('.endButton').click(function(){
  location.reload();
});
//functions




//name change on start
function createForm() {
$('<form><label>Name: </label><input type="text" id="form" value="tomagotchi"></form>').insertAfter($('.pet'));
}

//rename form
function renameForm() {
$('<form><label>Name: </label><input type="text" id="renameform"></form>').insertAfter($('.renamelabel'));
}

//setName
function setName(){
  document.getElementById('user-name').innerText = document.getElementById('form').value;
}

//setNewName
function setNewName(){
  document.getElementById('user-name').innerText = document.getElementById('renameform').value;
}



//Starts Age
function startAge(){
  const ages = setInterval(function() {
    //Age less then 10 then counts up
    if (age < 10){
      age++;
      updateAge()
    } else {
      //ends game
      $('#endCover').css("display","flex")
      let names = document.getElementById('user-name').innerText
      $('.endText').append($(`<p>Congrats! ${names} is 10 years old. it's time for ${names} to go to Heaven.</p>`))
      //clearInterval ends loop
      clearInterval(ages);
    }
  }, 2000)
}
  function updateAge(){
    //updates UI
    document.getElementById('age').innerText = `Age ${age}`;
  }


//pet
function generatePets(){
  const newPet = new Pet("dog");

  document.getElementById('pet').animate([
    //keyframes
    { transform: 'translateX(400px)'},
    { transform: 'translateX(-400px)'},
  ],{
    //timing options
    duration: 40000,
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
      statArr[a].classList.add("statusOff");
      $(".hungerStatus").append(statArr[a]);
  }
}

function createSleepScale(){
  for (let b = 0; b < statArr.length; b++) {
      statArr[b] = document.createElement('div');
      statArr[b].id = "sleep" + b;
      statArr[b].classList.add("statusOff");
      $(".sleepStatus").append(statArr[b]);
  }
}

function createBoredScale(){
  for (let c = 0; c < statArr.length; c++) {
      statArr[c] = document.createElement('div');
      statArr[c].id = "bored" + c;
      statArr[c].classList.add("statusOff");
      $(".boredomStatus").append(statArr[c]);
  }
}

function hungerTimer() {
setInterval(function (){
  if (hungerIndex < 10){
    let hungerNum = document.getElementById(`hunger${hungerIndex}`)
      hungerNum.classList.remove('statusOff');
      hungerNum.classList.add('statusOn');
      hungerIndex+=1;
    } else {
    clearInterval(hungerIndex);
  }
},3000)
}

function boredTimer() {
setInterval(function (){
  if (boredIndex < 10){
    let boredNum = document.getElementById(`bored${boredIndex}`)
      boredNum.classList.remove('statusOff');
      boredNum.classList.add('statusOn');
      boredIndex+=1;
    } else {
    clearInterval(boredIndex);
  }
},3000)
}

function sleepTimer() {
setInterval(function (){
  if (sleepIndex < 10){
    let sleepNum = document.getElementById(`sleep${sleepIndex}`)
      sleepNum.classList.remove('statusOff');
      sleepNum.classList.add('statusOn');
      sleepIndex+=1;
    } else {
    clearInterval(sleepIndex);
  }
},3000)
}
