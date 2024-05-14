const randomNumber = Math.floor(Math.random() * 50) + 1;
// const randomNumber generates number from 0 to 1
// 0.55
// Math.floor(Math.random() * 50) + 1;
// Math.floor(0.55 * 50) + 1;
// Math.floor(27.5) + 1; 
// 27 + 1 (rounded to the nearest integer and adding one so that instead of 0 to 49, it will be 1 to 50 random numbers)
// 28
const result = document.getElementById("result");
const btn = document.getElementById("btn");
let attempts = 5;

btn.addEventListener('click', function() {
    const userInput = document.getElementById('userInput');
    const guess = parseInt(userInput.value);

    if (guess >= 1 && guess <= 50) {
        if (guess === randomNumber) {
            result.innerHTML = `Congratulations! You have guessed the number right!`;
            result.style.cssText = `background-color: green; color: white; padding: 10px`;
        } else if (guess > randomNumber) {
            attempts--;
            result.innerHTML = `Wrong! That is too high. Try Again! You have ${attempts} remaining`;
            result.style.cssText = 'background-color: darkred; color: white; padding: 10px';
        } else if (guess < randomNumber) {
            attempts--;
            result.innerHTML = `Wrong! That is too low. Try Again! You have remaining ${attempts} .`;
            result.style.cssText = 'background-color: darkred; color: white; padding: 10px';
        } 

       if (attempts === 0 ){
            result.innerHTML = `GAME OVER! The number is ${randomNumber} `; 
            result.style.cssText = `font-weight: bold; color: darkred; padding: 10px; font-size: 30px;`;
            userInput.disabled = true;
        }
    } else {
        result.innerHTML = "Invalid Input. Please enter a number between 1 and 50";
        result.style.cssText = 'background-color: yellow; color: black; padding: 10px;';
    }
})
