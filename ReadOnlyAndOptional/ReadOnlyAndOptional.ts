// Here in this file we are seeing the use of readonly keyword and optional property.

/*Suppose we are making a user with the help of the mongoDB and we know that mongoDb gives us the _id 
but we dont want that the user should be able to change the id , so here we will use the 
readonly property.
See the below code to understand this better.*/

type UserType = {


   readonly _id : string
    name : string,
    email : string,
    isActice : boolean

}

/*Now we are creating the user with the the format we defined above or suppose mongoDB is creating the user
for us with the type we defined above.
It contains all the property we defined and the id also.*/

let MyUser : UserType = {

    _id : "12345",
    name : "yash",
    email : "yash.com",
    isActice : true


}

MyUser.name = "jain";
MyUser.email = "Yash@gmail.com";
MyUser.isActice = false;

/*Here we can see that when we are trying to change things of the MyUser we can do it easily
Except for the _id which is given by the mongoDB as we have mark the _id as readonly so now noone can
change it.*/

/* And if we anyone try to change the id he/she will get an error thats the benefit of 
using readonly keyword.*/

// MyUser._id = "12378"; This line we will give us an error now.



// Now lets understand the use of optional property.

/*Here we are taking the user details with their credit card details also , but as we know 
that every user doesnt have the credit card , but as we know that if we have provided something
inside the type then we have to fill out that property otherwise we will get an error. 
So now to tackle this problem  we have optional property of typescript.
Lets see this with the  help of the code.*/

type UserDetails = {

    readonly _id : string
     name : string,
     email : string,
     isActice : boolean,
     credCardDetails ? : number
 
 }

 let YourUser : UserDetails = {

    _id : "12345",
    name : "yash",
    email : "yash.com",
    isActice : true,
    // credCardDetails : 394739    

 }

/*Now here we can see that we didnt get any error even after missing the credCardDetails field ,
Because we have made that field optional , we have made the field optional with the help of 
Question Mark (?) which put infront of the credCardDetail field , this is how we make any field optional
and now if anyone wants so he/she the fill the field
otherwise it still ok.*/

