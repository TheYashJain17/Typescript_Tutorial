// In this file we are seeing the interface , how to use it , where to use it and many more things.

/* Interface is kinda similar like classes as well as type but not exactly same , 
now lets see how to use interface.*/

interface user {

    readonly dbId : number,
    email : string,
    googleId ? : number,

    // defineString : () => string //This is how we define a function inside an interface , This function is just returing a string value nothing else.

    defineString() : string //This is another method of defining the function inside interface , This function is also just returing a string value nothing else.

    getCoupon(couponName : string) : number //Again defining the function this function is taking a parameter in form of string and returing a number.

}

const zuno : user = {

    dbId : 89,

    email : "Zuno@gmail.com",

    defineString : () => {

        return "Zuno"

    },

    // getCoupon : (couponName : "anyting") => {

    getCoupon : (name  : "anyting") => { //here we can see that it is not necessary that the parameter name we defined inside the interface and the parameter name we defined here both are different , so it is not neccesary that both the names should be same . we can use whichever we want to use.

        return 300

    } ,

    githubToken : "githubtoken" //this is the field which we defined below with the help of reopening of interface.

}


/*The main property of the interface is that if we want to add more fields inside the interface
we dont have to go to the same interface again , we can simply just redefined the intetface wth the same name
and enter as many fields as we want to , this is also known as reopening of the interface.
Lets better understand this with the help of an example.*/

interface user{

    githubToken : string

}

/*Now just after defining this we will be asked that there is a missing field and that would be the same field
which we have made above , this means that the new field has been added to our interface.
This is how reopening of interface helps.
This is the special feature of interface.*/

/*We can also use inheritance in case of interface , this is also a speciality f interface.
Lets see this with the help of example.*/

interface Admin extends user{



}

/*Now the admin interface has all the properties of interface user and Now we can add more properties in the 
admin interface.*/