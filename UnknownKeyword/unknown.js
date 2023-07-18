"use strict";
// Unknown keyword and any keyword are same.
// But Unknown keyword is better than any keyword.
// Lets understand how is this possible.
/*Both Unknown and any keywords have same properties but still the unknown keyword is better than any.
We will see this with the help of code.*/
/*Here we are assigning any keyword to the variable data means we can enter any type of data inside the
data variable.

We are first assinging a string in the data variable and then a number value.

Then we are making another variable named item and we have declared its type as string

Now in last we are saying that the value of item variable is equal to value of variable data
but this shouldnt happen as we have stored number inside the data variable and then we have defined
that item variable should allow only string value inside it , So here we can see that we are not getting
the benefit of typescript.*/
let data;
data = "Hell0";
data = 20;
let item;
item = data;
// This code will give us error as it should as we are using unknown keyword.
// let data : unknown;
// data = "Hell0";
// data = 20;
// let item : string;
// item = data
/*So basically any switches off the properties of typesript and here comes the role of unknown keyword
As if we will make data of unknown type so we will get an error as we should get.

This is the benefit of using unknown keyword over any keyword.*/
// And we should use unknown keyword over any keyword.
