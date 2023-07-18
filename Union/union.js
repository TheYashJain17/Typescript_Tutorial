/*Union type is the type in which we want that variable can handle more than 1 type of data.
Like if we want that our variable can store either number value or string value according to our
need/want.
So with this we can store any type of value we want what we defined.
So we can do this like this(see below code).*/
var Score = 8934;
// Now lets see its actual use inside a function.
/*Here we are making function and inside that using union means if there is a number then the function will work
and if there is string then also the function will work this is the benefit of union type.

we have to do strict checking with the help of if else otherwise we will get an error.

But if there are many types we want to put inside a variable so instead of that use any keyword which we
learnt before.
We can also direclty use any keyword if we want.*/
function combine(a, b) {
    if (typeof a === 'number' && typeof b === "number") {
        return a + b;
    }
    else {
        return a.toString() + b.toString();
    }
}
console.log(combine(78, 83));
console.log(combine('yash', 'jain'));
/*we can also use in the array.
Lets understand this with the help of an example :-*/
//this means this array can have only number value.
var Data1 = [1, 2, 3, 4, 5];
//this means this array can have only string value.
var Data2 = ["1", "2", "3", "4", "5"];
/*this means this array can have either string valur or number value.
This is the use of union type in case of arrays.*/
var Data3 = [3, 4, 6];
/*if we want that our array should contain both the string and number values then we can do that also with the
help of our union type , we just have to use with just a little bit of twist in syntax.
See below code for better understanding.*/
var Data4 = ["2", "5", 3, 4, 6];
// We can also add boolean if we want like this :-
var data5 = ["1", 2, false];
// We can also give a partcular value to a variable if we want.
// Like this:-
var value;
// value = "yash"; now this line will give us an error as value variable cam have only Lucifer as value.
/*if we want that a variable should have only limited values and values other cannot be assigned to that
variable so in this case we can do this also.*/
var seatAllotment;
seatAllotment = "Front";
// seatAllotment = "Last"; Now this line will give us an error as this variable(seatAllotment) can only have the values which we defined above , if try to enter values other than that then we will get an error.  
