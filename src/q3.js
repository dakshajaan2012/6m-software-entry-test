/*
    Task 1:
    - Add a new property "breed" with the value "Poodle"

    Task 2: 
    - Implement a for-in to loop through the keys in "dog" object and print it with console.log()
*/

// Task 1: Add code here
const dog = {
    petName: "Bobby",
    breed: "Poodle"
}

// Task 2: Add code here
for(key in dog) {
    console.log(key+": "+dog[key])
}