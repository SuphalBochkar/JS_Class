// document.getElementsByName('num1').innerHTML=11+11

function addition(){
    var a = Number(document.calculator.num1.value) ;
    var b = Number(document.calculator.num2.value) ;
    var sum = a + b ;
    document.calculator.result.value=sum ;
}
function substract(){
    var a = Number(document.calculator.num1.value) ;
    var b = Number(document.calculator.num2.value) ;
    var sub = a-b
    document.calculator.result.value=sub
}
function multiply(){
    var a = Number(document.calculator.num1.value) ;
    var b = Number(document.calculator.num2.value) ;
    var mul = a*b
    document.calculator.result.value=mul
}
function divide(){
    var a = Number(document.calculator.num1.value) ;
    var b = Number(document.calculator.num2.value) ;
    var div = a/b
    document.calculator.result.value=div ;
}