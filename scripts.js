function myFunction(){
    
    const noun = ["person", "cat"] 
    const feel = ["sad", "happy"] 
    const time = [1, 5, 10] 
    const options = [noun, feel, time]
    
    for (let i = 0; i < options.length; i++){
        // get a random number between x and y, n timesn
        // let name = options[i]
        console.log(`giving a random number for ${options[i]}`)
        console.log(Math.floor(Math.random() * options[i].length) + 1);    // update 
        
    }
    
    alert ("Hello, Travis");


    document.getElementById("la").innerHTML("foo");
}

function addListener(){
    document.querySelector(".btn").addEventListener("click", myFunction);
}

document.addEventListener("DOMContentLoaded", function(event){
    addListener();
    // your code ere
  });