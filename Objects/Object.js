"use strict";
/*This is how we define an object inside typescript , we have to provide an object and then inside that object
have to mention the name of every field we are defining inside our object and then we have to define
the type of that field also , then only we wouldnt get any error.*/
const person = {
    name: "Lucifer",
    age: 10000,
    email: "abc@gmail.com"
};
console.warn(person.name);
// Now with the above type we can make similar objects without writing same piece of code again and again.
const user = {
    name: "HellKing",
    age: 50000,
    email: "Lucifer@gmail.com"
};
// This is how we can make our type and use it and make another objects of same type without doing extra efforts
