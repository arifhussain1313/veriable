// var username;
// var myname = "Arif Hussain";
// console.log(myname);
// var message = "Hello World";
// alert(message);
// // Assume student data
// const studentName = "John Doe";
// const studentAge = 20;
// const studentMajor = "Computer Science";

// // Display student data in alert boxes
// alert(`Student Name: ${studentName}`);
// alert(`Student Age: ${studentAge}`);
// alert(`Student Major: ${studentMajor}`);

// var rows = 5
// var cols = 5

// for(let i = 1; i<= rows; i++){
//     for(let j = 1 <= cols; j++){
//         document.write("pizza");
//     }
   
// };

// const word = "pizza";
// for (let i = word; i >= 1; i--) {
//     const words = "pizza".repeat(i);
// }
// alert(triangle);
// console.log(triangle);
// console.log(word);

// Define the number of rows for the inverted triangle
// const numRows = 5;

// // Loop through each row in reverse order
// for (let i = numRows; i >= 1; i--) {
//     // Create a string with pizza words (e.g., "🍕🍕🍕")
//     const pizzaSlice = "pizza".repeat(i);
//     console.log(pizzaSlice);
// }
// al


const pattern = "PIZZA";
let output = "";

for (let i = 0; i < pattern.length; i++) {
    output += pattern.substring(0, pattern.length - i) + "\n";
}

window.alert(output);

// function triangle(n) {
//     let i = n; i >=1; i--{
//         let row ='';
//         for (let j = 1; j <= i; j++) {
//             row += 'pizza';
//         }
//         console.log(row);
//     }
// }