// A class is a user-defined type which is defined by the user for an object.

/*For ex there is an object lets say a user , A user is an object in our example and now lets say there 
are several properties of the user like name of the user , age of the user and so on , also 
there could be functions regarding with the user like for adding or removing user and so on.*/

// So there are so many things for an object which is defined by the user , so this is known as class.

// Also we can define properties and methods in a class , we will understand this better with an example.


class Users{

name : string =  '';
email : string = '';


addUser(user : string){

    return `${user} is added`

}

// This is how we define a function inside a class.


}


let User1 = new Users;

User1.addUser("Yash");

