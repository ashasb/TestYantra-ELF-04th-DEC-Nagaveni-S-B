function Currency(){
    y = document.getElementById("converter").value;
    return y;
}

function Calculate(){
y = Currency();

x = document.getElementById("value1").value;

if(x == ""){
    document.getElementById("value2").value = "";
}else{
    switch(y){
        case "Dollar":
            document.getElementById("value2").value = x * 51.89;
        break;

       

        case "Euro":
            document.getElementById("value2").value = x * 63.84;
        break;
        case "Ind":
            document.getElementById("value2").value=x*1;

        
    }
}
}
function kilo() {
    document.getElementById('convert').innerHTML =
        (document.getElementById('grams').value/1000 + "kg");
}