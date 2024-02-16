function calcBMR() {
  // heigth 
  var myHeight = document.getElementById("myHeight").value
  console.log(myHeight);
  let inMeters = (myHeight / 100)
  let sqr = inMeters * inMeters
  console.log(sqr);

  var Hnotify = document.getElementById("hNotify")
  if (myHeight.length == 0) {
    Hnotify.innerHTML = "ENTER A VALID VALUE"
    Hnotify.style.color = "red"
    Hnotify.style.fontWeight = "bold"
  }
  // age
  var myAge = document.getElementById("age").value
  var Wnotify = document.getElementById("wNotify")
  if (myAge.length == 0) {
    Wnotify.innerHTML = "ENTER A VALID VALUE "
    Wnotify.style.color = "red"
    Wnotify.style.fontWeight = "bold"
  }
  // WEiGHT
  let myWeight = document.getElementById("myWeigth").value
  var noty = document.getElementById("Noty")
  if (myWeight.length == 0) {
    noty.innerHTML = "ENTER A VALID VALUE"
    noty.style.color = "red"
    noty.style.fontWeight = "bold"
  }
  // Calculation
  const BMI = document.getElementById("BMI")
  if (myAge.length != 0 && myHeight.length != 0 && myWeight != 0) {
    noty.innerHTML = ""
    Wnotify.innerHTML = ""
    Hnotify.innerHTML = ""
    CalcInner = eval(myWeight / sqr).toFixed(2)
    console.log(CalcInner);
    BMI.innerHTML = CalcInner
  }
  // loader 
  let load = document.getElementById("meterBar")
  console.log(load);
 let help=document.getElementById("help")
 let help2=document.getElementById("help2")

  if (CalcInner > 18.5 && CalcInner < 24.9) {
    load.style.left = "130px"
    help.innerHTML="Great shape" 
    help.style.color="green"
   
  }
  else if (CalcInner > 25 && CalcInner < 29.9) {
    load.style.left = "225px"
    help.innerHTML="Time to run!" 

    help.style.color="red"  
  } else if (CalcInner > 30) {
    load.style.left = "320px"
    help.innerHTML="Time to run!" 
    
    help.style.color="red" 
  }
  else if(CalcInner<18.5){
    load.style.left="35px"
    help.innerHTML="Time to grab a bite!" 

    help.style.color="red" 
  }
}

// Gender 
var male = document.getElementById("male")
var Female = document.getElementById("female")
function gender(valv) {
  if (valv == 'Female') {
    male.style.border = ".3px solid grey"
    Female.style.border = ".3px solid red"
    Female.style.zIndex="1"
    Female.style.backgroundColor="white"
    // return 'female'
  }
  else if (valv == 'Male') {
    male.style.border = ".3px solid red"
    Female.style.border = ".3px solid grey"
    male.style.zIndex="2"
    male.style.backgroundColor="white"
    // return 'male'
  }

}