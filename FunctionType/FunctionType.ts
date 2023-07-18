// Check till last line to understand all the things properly.

/*Function type means the type which the function is returning.
Suppose a function is returing a string value so the type of that function would be string
similarly if a function is returnig a number value so the type of that function would be 
number and so on...

so if we want that a function should return a particular type of value like string or number
so that we can do this like we do with variables we will define the type of the funciton 
as we declare for the variables.

/*Here we are declaring the type of function as number means the return value of the function should contain 
number , if we wil put value other than number then we will get an error.
Here we have taken a number inside a variable and returning that variable in that function
if we will return b instead of a so we will get an error as we set the type of the function as number
and we are returing a string value.*/

const A = 10;

const B = 'hello';

function showNumber():number{

    return A ;

}

/*if our function is performing a task like adding 2 numbers so we can define their types and the 
function type also like this

Defining the function type which means the return thing should be a number also otherwise throw an error
This is the benefit of defining function type , now even by mistake we cannot return thing other than the
type we defined :-*/

function addNum(a:number , b:number):number {

    return a + b;

    // return "string" : if we do this we will get an error as we have defined return type to be of number type.

}

console.log(addNum(10, 20));

/*So in the above case we are specifying type for function and parameters type , By doing this 
entering the value other than we defined would give us error.
This is the benefit of using function type.*/

// We are making another function in which we are taking different types of parameters.

let logInUser = (name : string , email : string , isPaid : boolean = false) => {}

/*Inside function we have given a default value to isPaid parameter so that if we didnt provide any value
regarding that value , that value will gonna be automatically provided inside that function.
Thats how we provide a default value to a parameter.*/

console.log(logInUser("yash" , "yash@gmail.com"));



/*So last thing to remember about functions is that if we want that there should be no return thing in our 
function then remember to make the function of void type , we can make the function of void type by writing 
:void in the function , see below code for better understanding.
Void function means there should be no return statment inside our function.*/ 

function consoleError(errormsg : string) : void{

    console.log(errormsg);

    // return errormsg; this statement will give us an error as we have made the function of void type.

}



