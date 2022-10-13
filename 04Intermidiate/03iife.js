// Immedietly invoked function expression

// Regular Function call
function sayHello(){
    console.log("hey")
    console.log("hey again")
    console.log("one last time, hey")
};

sayHello();

// Self executing and anonymous function
(function (){
    console.log("hey")
    console.log("hey again")
    console.log("one last time, hey")
})();
