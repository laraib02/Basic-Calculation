// Addition function 
function sumnumbers(){
    var value1=document.getElementById("number1").value;
    var value2=document.getElementById("number2").value;
    var res=parseFloat(value1) + parseFloat(value2);
    document.getElementById("result").innerHTML = res;
}
// Addition function end
// Subtraction function 
function subnumbers(){
    var value1=document.getElementById("number1").value;
    var value2=document.getElementById("number2").value;
    var res=parseFloat(value1) - parseFloat(value2);
    document.getElementById("result").innerHTML = res;
}
// Subtraction function end
// Multiplication function 
function multinumbers(){
    var value1=document.getElementById("number1").value;
    var value2=document.getElementById("number2").value;
    var res=parseFloat(value1) * parseFloat(value2);
    document.getElementById("result").innerHTML = res;
}
// Multiplication function end
// division function 
function dividenumbers(){
    var value1=document.getElementById("number1").value;
    var value2=document.getElementById("number2").value;
    var res=parseFloat(value1) / parseFloat(value2);
    document.getElementById("result").innerHTML = res;
}
// division function end
// reminder function 
function reminder(){
    var value1=document.getElementById("number1").value;
    var value2=document.getElementById("number2").value;
    var res=parseFloat(value1) % parseFloat(value2);
    document.getElementById("result").innerHTML = res;
}
// reminder function end