var car = {
    color : "blue";
    speed : 300;
    Made: "BMW";
    Piston: [{maker: "BMW"}, {maker: "BMW"}]
    clean: function() {return "clean";}
};
var Fruits = [
    "orange",
    "pinapple",
    "Banana",
    {juice: "passion"},
    function() {return "drink";}
];

//member access
console.log(car.speed);
// computed member access
console.log(car.piston[0].maker);