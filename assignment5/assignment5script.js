alert("Convertion of temperature from °C to °F - Part A")
console.log('This is Part A');
// ask the user to enter a temperature in °C
let numCelsius = prompt( 'Enter a temmperature in celsium:');
console.log(`Temperature enter is ${numCelsius}`);
let numFahrenheit = (numCelsius * (9/5)) + 32;
console.log(`Temperature in Fahrengeit is ${numFahrenheit}`);
alert(`Temperature in Fahrenheit is ${numFahrenheit}`);
console.log('This is part B')
alert('This is part B')
let johnBMI = 80/(1.78*1.78);
let lucasBMI=90/(1.88*1.88); 

if ( johnBMI > lucasBMI){
    console.log("John's BMI is higher than Lucas");
    console.log(`John's BMI ${johnBMI} is higher than Lucas' BMI ${lucasBMI}`);
}
else{
    console.log("Lucas' BMI is higher than John");
    console.log(`Lucas' BMI ${lucasBMI} is higher than John' BMI ${johnBMI}`);
}
console.log('This is part C');
alert('This is part C');
let result = prompt('Type a number');
 let numResult = Number(result);

if( !numResult  || result === ""){
    console.log("Please enter a number!");
 }
else if ( Number(result) === 10){
    console.log("You win 10 point");
}
else if( Number(result) === 8){
    console.log("You win 8 points to console");
}
else if( numResult !== 8 || numResult !== 10) {
    console.log("NOT MATCHED");
}
