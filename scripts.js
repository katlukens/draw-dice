function rollDice(){
    
    // individual dice
    const noun = ["person", "cat",  "flower"] 
    const feel = ["sad", "happy"] 
    const time = ["1 minute", "5 minutes", "10 minutes"] 

    // all dice
    const options = [noun, feel, time]

    // make a new array to hold results
    var results = new Array();
    
//    roll each die
    for (let i = 0; i < options.length; i++){

        // append a random result into our results
        let dieSide = Math.floor(Math.random() * options[i].length)
        let result = options[i][dieSide]
        results.push(result);
        console.log(`${options[i]}: ${result}`);
    }

    document.getElementById("noun").innerHTML = results[0]
    document.getElementById("feel").innerHTML = results[1]
    document.getElementById("time").innerHTML = results[2]
    
//    alert (results);
}

function addListener(){
    document.querySelector(".btn").addEventListener("click", myFunction);
}

document.addEventListener("DOMContentLoaded", function(event){
    addListener();
    // your code ere
  });