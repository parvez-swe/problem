/*
var myGlobal =10;
function fun1(){
    var oopsGlobal = 5;
    
}

console.log(typeof myGlobal);
console.log(typeof oopsGlobal);

function fun2(){
    var output ="";
    if(typeof myGlobal !="undefined"){
        output +="oopsGlobal: " + myGlobal;
    }
    if(typeof oppsGlobal !="undefined"){
        output+="oopsGlobal: " + oppsGlobal;
    }
    console.log(output);
}
fun1();
fun2();
*/
//The ability judge for take participate in the vot
var names = prompt("Plese Enter your Name:");
var age = prompt("Enter your age:");
var ages = age;
notAgree= "sorry dear '" + names +"' you cant participate the election";
agree="congratulation dear '"+ names+"' you can participate in the election";

if(ages>=18){
    var id =prompt("Have you NID card?  Answer: 'yes' or 'no'");
    var ids=id;
    if(ids=="yes"){
         document.getElementById("n").innerHTML=agree;
    }
    else{
        document.getElementById("n").innerHTML="Please collect your Id Card";
    }
   

}
else{
    document.getElementById("n").innerHTML=notAgree;
}








