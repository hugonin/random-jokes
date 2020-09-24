// Create 4 variables and assign them to their respective elements: setupDiv, punchlinDiv, punchlineBtn, newJokeBtn
const setupDiv = document.getElementById("setup");
const punchlineDiv = document.getElementById("punchline");
const punchlineBtn = document.getElementById("punchlineBtn");
const newJokeBtn = document.getElementById("newJokeBtn");
let punchline;


// Add an event listener for the punchline button. When clicked it should call a function called getPunchline
punchlineBtn.addEventListener("click", getPunchline);

/* Create the getPunchline function. This function should: 
    Insert the punchline into the punchlineDiv
    Add the class "bubble" to the punchlineDiv
    Toggle the "hidden" class on both buttons.
*/
function getPunchline() {
    punchlineDiv.innerHTML = punchline;
    punchlineDiv.classList.add("bubble");
    punchlineBtn.classList.toggle("hidden");
    newJokeBtn.classList.toggle("hidden");
}


// Add an event listener for the new joke button. When clicked it should call the getJoke function 
newJokeBtn.addEventListener("click", getJoke);

// Setup an async function called getJoke
// Create a variable called jokePromise that fetches a joke from https://official-joke-api.appspot.com/jokes/programming/random
// create a variable called joke that consumes the json data
async function getJoke() {
    const jokePromise = await fetch("https://official-joke-api.appspot.com/jokes/programming/random");
    const joke = await jokePromise.json();
    console.log(joke);
    setupDiv.innerHTML = joke[0].setup;
    punchline = joke[0].punchline;
    punchlineDiv.innerHTML = " ";
    punchlineDiv.classList.remove("bubble");
    punchlineBtn.classList.toggle('hidden');
    newJokeBtn.classList.toggle('hidden');

    

}

getJoke();
    
    // Get the setup from the joke and insert it into the setupDiv element
    
    // Create a global variable called punchline which will store the current punchline and will be updated with each new joke
    // Assign the current jokes punchline to the punchline variable.
    
    // Clear the punchline div and remove the "bubble" class from the punchline div
