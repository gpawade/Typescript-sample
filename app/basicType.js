// Number
var height = 6;
//Array
var list = [1, 2, 3];
var list = [1, 2, 3];
// Enum 
var Color;
(function (Color) {
    Color[Color["Red"] = 0] = "Red";
    Color[Color["Green"] = 1] = "Green";
    Color[Color["Blue"] = 2] = "Blue";
})(Color || (Color = {}));
;
var c = Color.Green;
//void
function warnUser() {
    alert("This is my warning message");
}
