//These are the JS functions
var currentNum = 0;
var equation = [];

//These are the buttons
var nums = document.querySelectorAll(".num");
var operators = document.querySelectorAll(".oper");
var equals = document.querySelector("#equals");
var clear = document.querySelector("#clear");
var clearAll = document.querySelector("#clearAll");

//This is what happens when you click a number
nums.forEach(function(val){
    val.addEventListener("click", function(){

        if(equation.length > 2){
            mathCalc(equation[1]);
        }
        currentNum = currentNum + this.value;
        
        if(equation.length == 2){
            document.querySelector("#calcFace").innerHTML = equation[0] + " " + equation[1] + " " + currentNum;
        }
        else{
            document.querySelector("#calcFace").innerHTML = currentNum;
        }
    });
});

//NOTES FOR LATER
//if(currentNum!=="" || typeof equation[equation.length-1] !== "number")
//overwrite operator
//put the thing in the DOM

//This is what happens when you click =, -, *, or /
operators.forEach(function(val){
    val.addEventListener("click", function(){
        var intNum = parseInt(currentNum);
        equation.push(intNum);
        equation.push(this.value);
        currentNum = "";
        document.querySelector("#calcFace").innerHTML += " " + equation[1];
    });
});

function mathCalc(x){
    switch(x){
        case "+": equation[0] = equation[0] + equation[2];
            break;
        case "-": equation[0] = equation[0] - equation[2];
            break;
        case "*": equation[0] = equation[0] * equation[2];
            break;
        case "/": equation[0] = equation[0] / equation[2];
    }
    console.log(equation[0]);
    equation.pop();
    equation.pop();
    console.log(equation);
}

//This is what happens when you click =
equals.addEventListener("click", function(){
    equation.push(parseInt(currentNum));
    mathCalc(equation[1]);
    document.querySelector("#calcFace").innerHTML = equation[0];
});

//This is what happens when you click Clear
clear.addEventListener("click", function(){
    currentNum = " ";
    document.querySelector("#calcFace").innerHTML = equation[0] + " " + equation[1] + " " + currentNum;
});

//This is what happens when you click Clear All
clearAll.addEventListener("click", function(){
    currentNum = " ";
    equation = [];
    document.querySelector("#calcFace").innerHTML = " ";
});






































