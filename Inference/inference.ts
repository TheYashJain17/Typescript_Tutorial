/*Inferene means auto detecting , Like in typescript we always defined that this variable is a string or
a number or boolean but with the help of inference we dont have to specially mention that this variable
is of this type or that type.*/

let Data = 10


/*when we will hover on this line(above line of code) we will get that we could have make data : number
but now as we have assigned data = 10 , if now we will try to enter something other than number 
we  will get an error.*/

// Data = "string"

/*Now the above statement will give us an error saying that Type 'string' is not assignable to type 'number'.
Means dont enter value other than number
This is known as inference  , system is detecting automatically that what should be the type of variable.*/

// if we just declared the variable and not assgined any value to it.

let matter;

matter = 10;
matter = true;
matter = "matter";

/*In this case we will not get any error regarding the type as in this case inference will not work and
we can provide any value to it.*/

/*if we want that a particular variable should contain a particular value not the data type but the value.
So in this case we can also do this.*/

let num:5;


/*Here we are assigning 5 to the variable num means now no one can change the value num , if he/she will try to
enter any value other than 5 he/she will get an error.*/

// num = 10

// Above line of code will give us an error as we have learnt the reason in above line of comments.

/*if we declare a value with the help of const then also it will gonna behave in same case as the above code 
is behaving.*/

const val = 10;

/*As we have made the variable with the help of const so this variable has been assgined with value 10
and now if we will try to change this , we will get an error.*/

// val = 20;

// Above line will give us an error as we have understood the reason above.