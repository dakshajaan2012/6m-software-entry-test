/*
    Task 1
    - Create a function that would swap the value of x and y using only x and y as variables.
    - x and y must be numeric.
    - return -1 if x and y is not numeric.
    - print the swapped values in the console

    Task 2
    - invoke the function "swap"
*/

function swap(x, y){ 
    // Task 1: Add code here
    x = x + y
    y = x - y
    x = x - y
    console.log(
        "x = " + x + ", y = " + y

    )
}

// Task 2: Add code here
swap(6,7)

module.exports = swap;
