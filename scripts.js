function rollDice(){
    
    // individual dice
    const noun = ["person", "cat",  "dragon", "house", "frog", "shoe"] 
    const feel = ["friendly", "angry", "sad", "laughing","sleeping", "bored" ] 
    const time = ["1 minute", "3 minutes", "5 minutes", "10 minutes", "15 minutes", "30 minutes"] 

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

// change text orientation of dice on click of button
function sideWays(){
    var elements = document.querySelectorAll('.d6')
    elements.forEach(function(element) {
        // element.style.transform = "rotate(0deg)";
        element.style.webkitTransform = "rotate(0deg)";
        element.style.mozTransform = "rotate(0deg)";
        });
}

function addListener(){
    document.querySelector(".btn").addEventListener("click", function(){
        rollDice();
        sideWays();
    });
}

document.addEventListener("DOMContentLoaded", function(event){
    addListener();
    // your code ere
  });