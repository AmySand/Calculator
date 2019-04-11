var currentNum = "";
var equation = [];

var nums = document.querySelectorAll(".num");

var operators = document.querySelectorAll(".oper");

var equals = document.querySelector("#equals");

nums.forEach(function(val){
    val.addEventListener("click", function(){

//        if(equation.length > 2){
//            mathCalc(equation);
//        }
//
//        else{
            currentNum = currentNum + this.value;
            console.log(currentNum);
//        }
    });
});

//var operator = document.querySelectorAll(".oper");
//operator.forEach(function(){
//    operator.addEventListener("click", function(){
//        currentNum = parseInt(currentNum);
//        console.log(operator);
//    });
//});

operators.forEach(function(val){
    val.addEventListener("click", function(){
        var intNum = parseInt(currentNum);
        equation.push(intNum);
        
        equation.push(this.value);
        currentNum = "";
        console.log(equation);
    });
});

//function mathCalc(equation){
//    var newNum = equation[0] + equation[1] + equation[2];
//    console.log(newNum);
//}

equals.addEventListener("click", function(){
    equation.toString();
    console.log(equation);
//    equation = "";
});
