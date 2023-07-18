"use strict";
/*Public modifier means the things which can be accessed from both inside and outside of the class , things
can be anything like a vairable or a function.*/
// This is our public modifier.
/*class Users{

name = "";

setName(name : string){

    this.name = name;

}

displayName(){

    console.log(this.name);

}

}

const u1 = new Users();

u1.setName("Lucifer");

u1.name = "Yash";

u1.displayName();*/
/*Private modifier means the things which can be accessed only from inside of the class , things can be
anything like a variable or a function.*/
// This is our private modifier.
class Users {
    constructor() {
        this.name = ""; //this is how we make a variable private.
    }
    setName(name) {
        this.name = name;
    }
    displayName() {
        console.log(this.name);
        this.getNameLength('yash'); //we have to define the function like this inside the class for using it as it is a private function , so for using private functions always remember to use the function inside the class.
    }
    getNameLength(name) {
        this.name = name;
        console.log(this.name.length);
    }
}
const u1 = new Users();
u1.setName("Lucifer");
// u1.name = "Yash"; //In public modiifer we can update name like this but in private modifier we cannot update name like this . this is the benefit of using private modifier.
// u1.getNameLength("Yash"); //Now this function is private , so for using this function we have to use this inside the class only.
u1.displayName();
