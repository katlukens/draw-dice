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
    var noun = document.querySelector('#n')
    var feel = document.querySelector('#f')
    var time = document.querySelector('#t')

    noun.style.webkitTransform = "rotate(35deg)";
    noun.style.mozTransform = "rotate(35deg)";
    noun.style.boxShadow = ".75rem .75rem .5rem #252C34, .45rem .45rem .5rem white inset, 0rem -.05rem .25rem white inset";

    feel.style.webkitTransform = "rotate(-35deg)";
    feel.style.mozTransform = "rotate(-35deg)";
    feel.style.boxShadow = "-.75rem .75rem .5rem #252C34, -.45rem .45rem .5rem white inset, 0rem -.05rem .25rem white inset";


    time.style.webkitTransform = "rotate(35deg)";
    time.style.mozTransform = "rotate(35deg)";
    time.style.boxShadow = ".75rem .75rem .5rem #252C34, .45rem .45rem .5rem white inset, 0rem -.05rem .25rem white inset";


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