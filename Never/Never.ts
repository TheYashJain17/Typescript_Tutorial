/*This keyword is basically used whenever we are throwing an error through our function.
Because when we get an error , our code gets break and there comes the role of never keyword.
It is not mandatory to use the never keyword but still we can do it to make our code look standardized.*/

// Below code is the example of using never keyword inside a function throwing error.

function isError(msg , code):never {

    throw {message : msg , errorCode : code}


}

console.log(isError("Server Side Error" , 404));