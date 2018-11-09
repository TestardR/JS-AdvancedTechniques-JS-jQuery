
// First way
// Provide defaults within the function when parameters are missing
// 1. Useful when one or two parameters are optional
// 2. Optional parameters should be at the end of the parameter list
// 3. If more than one parameter is optional, certain assumptions must be made if only one is supplied
// => See Draw-Version 6

// Second way
// Provide defaults for remaining(all) parameters
// 1. All parameters are optional
// 2. Order of parameters is still important
// 3. May have to pass "undefined" as a position holder
// => See Draw-Version 7