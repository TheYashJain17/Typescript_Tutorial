// In this file we are seeing how can we make an Enum 

/*Benefit of Enum is that we can define many values inside this and that value will be assigned with a number
starting from 0 like the index number and goes up to last value present inside the enum.
and now whenever we will access the name of the Enum we will automatically get all the values which 
have provided inside the enum , So with this we dont have to remember the values which we have provided
inside the enum.
This is exactly similar as the enum which learnt inside the solidity.*/

enum Role {

    Admin , Manager , Read_Only_User


}

// Role.

/*Now whenever we will write the name of enum which is role in this case , so whenever we will write the name 
of the enum we will get only those fields which we have declare inside the enum , so in this way 
we can restrict the user from choosing the fields , by this he/she can choose the resticted fields only.*/


console.log(Role);

/*By consolling the enum we will get an object and inside that object we will have all the values present
inside the enum assigned with the number starting from 0 as we have learnt above.*/