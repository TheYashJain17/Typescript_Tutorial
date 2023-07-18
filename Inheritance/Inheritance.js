"use strict";


// We are learning to use inheritance in typescript.


class CreatedAccount {

    makeEmail(User) {

        return `${User}@gmail.com`;

    }

}

class User extends CreatedAccount {

    addUser(User) {

        return `${User} added as a new parent`;

    }

}

/*with the help of extends keyword we can use properties and methods of another class.

So this is the main benefit of using inheriance , make functions in another class and

then use them in any place which we want .*/


const p1 = new User();

console.log(p1.addUser('Yash'));

console.log(p1.makeEmail("Yashjain"));


