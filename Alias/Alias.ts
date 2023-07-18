/*In this file we gonna understand the importance of alias , Alias means making a type.

Suppose we have multiple variables and all of them have same types.

For ex: See Below Code.*/

/*let a : string | number | undefined;

let b : string | number | undefined;

let c : string | number | undefined;*/

/*So in above code we have multiple variables having same type , so here we can see that we are writing the same
code again and again.

So instead of doing this we can store all the types in a single variable.*/

/*We can make our type for storing all these types using type keyword and we will store all
types inside this and instead of writing this we will use this variable inside which we have 
stored all the types.*/


type varType = string  | number | undefined;


let a : varType = 10;

let b : varType = '20';

let c : varType = undefined;


/*Now by using the type we made , we can see that how much our code is clean and readable and now 
we dont have to write the same piece of code again and again and 
thats how we use the alias.*/

/*We can also made a object similarly like this.
And that we can use  for taking information of a user.
Suppose there are multiple users and we want to take similar information from all the users , so this 
can help us regarding the SVGMaskElement.*/


type UserInstnace = {

    name : string,
    email : string,
    isActice : boolean

}

function createUser(user : UserInstnace){

}

createUser({name : "" , email : "" , isActice: true});

/*So with the help of type alias we dont have to define the datatype of the variables again and again.
This is the benefit of using type alias in object.*/


// We can also make the function return the type alias if we want like this:-

function returnUser() : UserInstnace{

    return {name : "" , email: "" , isActice : true};

}

