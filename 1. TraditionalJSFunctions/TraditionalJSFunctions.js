function myFunction(text) {...} 

myFunction = function(text) {...} // clearer

// problem : these two functions are placed in the global scope and available to any scripts running in the browser windows
// prone to be mixed with libraries that you may have loaded, for instance jQuery.

var myFunction = function(text) {...} // minimum the define a function. Var keyword limits the scope to the current code block.

var myObject = {myFunction: function(text) {...}} // include the function inside an object within our page. This makes for nice encapsulation and reusability.
//  Var keyword limits the scope to the current code block.

myObject = {myFunction: function(text) {...}} // Better idea: Create a single object with a unique name and attach functions to that object.
// the global object is refered to as a namespace. Allows to defined functions without conflicting with other libraries.
// global scope allows for content to access your creation.
// It allows for creating library of functions.


