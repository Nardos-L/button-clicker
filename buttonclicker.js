
var num = 1;
function displayNumber() {
    console.log(num);
    num++;    
    document.getElementById("pop").innerHTML += num + ",";   
}
displayNumber();