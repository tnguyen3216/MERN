//Q1. Create a file with name basics and show all the features that you know about javascript
/*
    -javascript variables can be assigned any values.Also to declare variabel no need varaible type or even var keyword.
    -there are 6 primitives types in javascript: underfined, string , number, boolean, null, object 
    -
    */

//Q2. As javascript is not a type safe and has auto cast feature - try showing below values from the same variable
// and its type as well :values are - "Robert ", .0266, false, {myname : "Test Me"}, 25166665, undefined, true, "Robert Jr.", null, {}, -32767

var x = "Robert"
console.log(x);

x= 0.266
console.log(x);

x = false
console.log(x);

x ={myname: "Test me"}
console.log(x);

x = 2516665
console.log(x);

x = undefined
console.log(x);

x = true
console.log(x);

x = "Robert Jr."
console.log(x);

x = null
console.log(x);

x = {}
console.log(x);

x = -32767
console.log(x);
//Q3. Create a function with name show user info, this function expects three params, firstname, lastname and age
//  print all the details in the given function
function userInfo(firstname, lastname, age){
    console.log(firstname + " " + lastname + " " + age);
}
userInfo("Toan", "Nguyen", 23);
//Q4. Create a function with name add pass three parameters and return the sum of all the three numbers
// below out puts needs to be monitored - add(2,3,4), add(2), add(2.3,3), add("first", 2, "three")
// analyse the outputs we got and try explaining the reasons behind
function add(x, y , z){
    return x +y + z;
}

console.log(add(2,3,4));
console.log(add(2));
console.log(add(2.3,3));
console.log(add("first", 2, "three"));


//first add function works fine out put is 9
//2nd add function out put is NaN. I think because we call add with only 1 parameter while the function takes 3. 
//3rd add function same reason as 2nd
//4th add function out put is first2three. I think output is string because the function add doesn't have generic
//so it takes anytype and here we are concating string and number, which apparently works in javascript.


//Q5. Go through with the third slide in js-basics-MERNTStack.ppt and print all the features, with example that are being named in slide

//dynamic typing:
var s = 13;
console.log (s);

s = "hello"
console.log(s);

console.log(undefined);
console.log(null);
console.log($);


//Q6. Do the same thing as Q5 for slide number 4, 6 and 7 as well.
var car = {myCar: 'Toyota', getCar: carTypes('Honda')};
console.log(car.myCar) //Toyota
console.log(car.getCar) //Honda


