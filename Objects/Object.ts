/*This is how we define an object inside typescript , we have to provide an object and then inside that object
have to mention the name of every field we are defining inside our object and then we have to define
the type of that field also , then only we wouldnt get any error.*/

const person :{name:string , age:number , email:string} = {

    name : "Lucifer",
    age : 10000,
    email : "abc@gmail.com"


}

console.warn(person.name);

/*Suppose if we want to make an object with the same fields like we have made above then we can also 
do this without writing the same code again and again , 
So for doing this we will make a type , like till now we have seen different types like 
string type or number type or object type , so we can create a type like this also for us

For doing this we have to use type keyword and then give any name which we want to and then write/copy
that part in which we have mentioned our names of fields and its types.
See below line of code.*/

type objType = {name:string , age:number , email:string};

// Now with the above type we can make similar objects without writing same piece of code again and again.

const user : objType = {

    name : "HellKing",
    age : 50000,
    email : "Lucifer@gmail.com"

}

// This is how we can make our type and use it and make another objects of same type without doing extra efforts


