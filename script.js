function flipColor(){
    let arr = ["red", "blue", "green", "white"]; //created an array of colors

    //We will get the random numbers beetween 0 to length of given array
    let randomNumber = Math.floor(Math.random()*arr.length);
    //arr[randomNumber] will give us random element from array
    document.getElementById("main").style.backgroundColor = `${arr[randomNumber]}`;
    document.getElementById("text").innerText = `Background color is : ${arr[randomNumber]}`

}



