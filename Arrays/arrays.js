/*If we want to declare a particular type array means this array can contain only string valie , similarly
we can make number array or boolean array according to our need or want.

This is how we can declare a particular type of array, now in this array no one can enter value other
than string as this is of string type , if we try to enter values other than string with the help of
array properties then also we wil get an error so dont try to do that.*/
var random = ['python', 'javascript', 'solidity'];
/*If we have fixed size of array then we can also declare that which at which place we want what type of array
suppose at first place we want string so we can define this , if we want numebr at second place then we can
define like this and so on... but this thing will only work in case of fixed size array.

If we have defined a type of the value but didnt entered that value then the system will give us an error
so to prevent that use question mark(?) in front of that type whose type of value we havent declared till yet
so with this we can declare value later also and it will gonna work for us perfectly.
Like we are doing below with the help of .push property of array.

check below array to understand this better.*/
var random2 = ['abc', 124];
random2.push(false);
console.warn(random2);
/*If we want that our array should be totally of random type means can enter any value inside this array
then we can use any keyword or dont have to mention anything at all as inference will gonna do that thing
for us.
Check below code for better understanding*/
var random3 = ['abc', 124, false];
//Or
var random4 = ['abc', 124, false];
/*Now we are making an array of the type we made above(userData) , so inshort we are saying that all the data which will
gonna be enter into this array should be of allIUsers type.*/
var allUsers = [];
// Now here we are pushing the same data which we declared above.
allUsers.push({ name: "yash", isActive: true });
