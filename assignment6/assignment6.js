alert('Hi');

//Part A
alert('Part A');
// Class Activity:
// Create a function to check who the winner is:
// There are two teams, Nets and Knicks. They compete against each other 3 times.
// The team with the highest average score (the score should be at least 100) wins a trophy!
// A draw only happens when both teams have the same score and both have a score greater or equal 100 points. Otherwise, no team wins the trophy.
// Test data:
// Data 1: Nets score 80, 82 and 100, Knicks score 80, 90 and 106 Data 2: Nets score 98, 110 and 101. Knicks score 108, 92 and 110

function calAvg(val1, val2, val3) {

        const finalResult = (val1 + val2 + val3) / 3;
    
        return finalResult;
    
    }

function checkWinerPro() {

        const nets1 = Number(prompt('Type the 1st round score for Nets'));
        const nets2 = Number(prompt('Type the 2nd round score for Nets'));
        const nets3 = Number(prompt('Type the 3rd round score for Nets'));
        const knicks1 = Number(prompt('Type the 1st round score for Knicks'));
        const knicks2 = Number(prompt('Type the 2nd round score for Knicks'));
        const knicks3 = Number(prompt('Type the 3rd round score for Knicks'));
    
        const avgNestScore = calAvg(nets1, nets2, nets3);
        const avgKincksScore = calAvg(knicks1, knicks2, knicks3);
    
    
        if (avgNestScore > avgKincksScore && avgNestScore > 99) {
            return `Nets win-----! the score is${avgNestScore}`;
        }
        else if(avgKincksScore > avgNestScore && avgKincksScore > 99){
            return `Knicks win-----!  the score is ${avgKincksScore}`; 
        }
        else if ( avgKincksScore === avgNestScore && avgKincksScore > 99)
            return `Both teams have the same score.  The score is ${avgKincksScore}`; 
        else{
            return `no team wins the trophy. Nets score is ${avgNestScore}. Knicks score is ${avgKincksScore}`

        }
    
    }

 alert(checkWinerPro());
    


 //Part B
 alert('Part B');
//  Create a tip calculator function for whoever goes eating in a restaurant. Tip rule: tip 15% if the bill value is between 30 and 100. If the value is different, the tip is 20%.
// Print a string to the console containing the bill value, the tip, and the final value (bill + tip). Example: 'The bill was 275, the tip was 41.25, and the total value 316.25
// Hints: Try not to use an if/else statement.

//the ternary operator
let total = Number(prompt('Enter the bill value.'));
let tip = 0;
let totalWithTip = 0;

total < 100  && total > 30 ? tip = total *.15 : tip = total *.20;
totalWithTip = total + tip;
alert(`The bill was ${total}, the tip was ${tip}, and the total value ${totalWithTip}.`);
console.log(`The bill was ${total}, the tip was ${tip}, and the total value ${totalWithTip}.`)


//Part C
alert('Part C')
// Create 2 functions (Arrow Function Only) to convert temperature:
// 1. Create a function called CovertCelsiusToFahrenheit. When calling the function, pass a Celsius temperature value (argument) to the function, the function can convert it to Fahrenheit temperature. Log a message to console at the end. Eg: "NN°C is NN°F".
// TEST DATA: 100°C 0°C 10°C
// 2. Create a function called CovertFahrenheitToCelsius. Convert Fahrenheit to celsius and log "NN°F
// is NN°C." to Console. TEST DATA: 32°F 10°F 102°F

// const show1 = () => console.log("I'm a function!!!!");

const CovertCelsiusToFahrenheit = (celsiusValue) => {
     const result = celsiusValue *(9/5) + 32;
     console.log(`${celsiusValue}°C is ${result}°F`);

}
CovertCelsiusToFahrenheit(100);
CovertCelsiusToFahrenheit(0);
CovertCelsiusToFahrenheit(10);

const CovertFahrenheitToCelsius = (fahrenheitValue) => {
    const result = (fahrenheitValue - 32) *(5/9);
    console.log(`${fahrenheitValue}°F is ${result}°C`);
}    

CovertFahrenheitToCelsius(32);
CovertFahrenheitToCelsius(10);
CovertFahrenheitToCelsius(102);