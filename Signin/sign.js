var mail = document.getElementById('email');
var key = document.getElementById('pass');

var button = document.getElementById('btn');

button.addEventListener("click", function(){
    var email = mail.value;
    var password = key.value;

    // var correctEmail = "xyz.abc@gmail.com";
    // var correctPass = "secret";
    
    var correctEmail = "1";
    var correctPass = "2";

    var correctEmail = "6";
    var correctPass = "7";
    if(email === correctEmail && password === correctPass){
        window.open("Calculator.html")
    }  
    else{
        alert("Wrong Password")
    }
});
