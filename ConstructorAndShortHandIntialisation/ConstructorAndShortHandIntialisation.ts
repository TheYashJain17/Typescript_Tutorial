// First we are seeing how to use a constructor in a class.

/*class senders{

    name = "";
    age = 0;
    email = "";


constructor(name : string , age : number , email : string){

    this.name = name;

    this.age = age;

    this.email = email;

}

displayValues(){

    console.log(this.name);
    console.log(this.age);
    console.log(this.email);


}

}

const s1 = new senders('yash' , 22 , "Yo@gmail.com");

s1.displayValues();*/

/*So this is how we use cnstructor in a class to show all the things we want to show , but here we can see that
we have to do a long procedure  to show the things which we want to , Like 
first initialising the empty variables inside our class and then inside constructor we are using this. to 
store all the required things.
So instead of all this we can short our work with the help of short hand initialisation.
Lets see how we can do that.*/

class senders{

constructor(public name : string , public age : number , public email : string){

}

displayValues(){

    console.log(this.name);
    console.log(this.age);
    console.log(this.email);


}

}

const s1 = new senders('yash' , 22 , "Yo@gmail.com");

s1.displayValues();

/*Here with the help of short hand initialization we just have to write public keyword and thats it ,
Now we dont have to initialise empty variables or even dont have to use this . inside constructor ,
Simply just use public keyword and thats it our work is done.

We will get the same output as we were getting from the help of above procedure

Both of the outputs are going to be same.*/