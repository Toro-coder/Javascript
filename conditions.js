// if statement
var carsleft = 1 ;
    carsRight = 0;
    greenlight = "no";

if (greenlight === "yes") {
    console.log('cross the road');
}
else if(greenlight=== yes && carsleft === 0 || carsRight === 0){
    console.log('All clear! Cross the road');
}
else
{
    console.log("Stay where you are!")
}

//for loop
var classRegister = ["Brian", "Joan","Cynthia"];

/* for (var i=0; i<classRegister.length; i++){
    console.log( classRegister[i]);
}*/

/* for (var i= classRegister.length -1; i>=0; i--){
    console.log( classRegister[i]);
} */
for (var index in classRegister ){
    console.log( classRegister[index]);
}