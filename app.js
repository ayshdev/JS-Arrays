let footer = "▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬ஜ۩۞۩ஜ▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬"
// ex 1

let studentNames1 = [];


//ex 2

let studentNames2 = new Array();

// ex 3

let colors = ["black" , "purple" , "red" , "yellow"];

// ex 4

let numbers = [1 , 2 , 3 , 4 , 5];

// ex 5

let boolean = [true, false, true, false];

// ex 6

let mix = ["Ubaid", 24, true, "Black", 456];

// ex 7

let qualifications = ["SSC", "HSC", "BCS" , "BS" , "BCOM" , "MS" , "M.Phil", "PhD"];

// console.log(qualifications.length);

console.log("EXERCISE 7");
console.log("Qualifications:");
console.log(qualifications[0]);
console.log(qualifications[1]);
console.log(qualifications[2]);
console.log(qualifications[3]);
console.log(qualifications[4]);
console.log(qualifications[5]);
console.log(qualifications[6]);
console.log(qualifications[7]);

console.log(footer);


// ex 8


let studentNames3 = ["Ali", "Ayesha", "Amna"];
let marks = [350, 450, 400];

let percentage1 = (marks[0]/500)*100;
let percentage2 = (marks[1]/500)*100;
let percentage3 = (marks[2]/500)*100;

console.log("EXERCISE 8");
console.log("Score of", studentNames3[0], "is", marks[0], ". Percentage: ", percentage1);
console.log("Score of", studentNames3[1], "is", marks[1], ". Percentage: ", percentage2);
console.log("Score of", studentNames3[2], "is", marks[2], ". Percentage: ", percentage3);

console.log(footer);


// ex 9

let colors2 = ["Black" , "Purple" , "Red"]

console.log("EXERCISE 9");
console.log("Original Array:", colors2);

// a. Ask the user what color he/she wants to add to the
// beginning & add that color to the beginning of the array.
// Display the updated array in your browser.

let userColor1 = prompt("EXERCISE 9-a: \n Enter a color name which you wanna add in the beginning of the array.");
colors2.unshift(userColor1);
console.log("Updated Array(a):", colors2);


// b. Ask the user what color he/she wants to add to the end
// & add that color to the end of the array. Display the
// updated array in your browser.

let userColor2 = prompt("EXERCISE 9-b: \n Enter a color name which you wanna add in the end of the array.");
colors2.push(userColor2);
console.log("Updated Array(b):", colors2);


// c. Add two more color to the beginning of the array.
// Display the updated array in your browser.

colors2.unshift("Brown", "White");
console.log("Updated Array(c):", colors2);


// d. Delete the first color in the array. Display the updated
// array in your browser.

colors2.shift();
console.log("Updated Array(d):", colors2);


// e. Delete the last color in the array. Display the updated
// array in your browser.

colors2.pop();
console.log("Updated Array(e):", colors2);

// f. Ask the user at which index he/she wants to add a color
// & color name. Then add the color to desired
// position/index. . Display the updated array in your
// browser.

let userIndex1 = prompt("EXERCISE 9-f: \n Enter the index number where you want to add the color.");
let userColor3 = prompt("EXERCISE 9-f: \n Enter the name of the color you wanna add.");

colors2.splice(userIndex1, 0, userColor3);

console.log("Updated Array(f):", colors2);


// g. Ask the user at which index he/she wants to delete
// color(s) & how many colors he/she wants to delete. Then
// remove the same number of color(s) from user-defined
// position/index. . Display the updated array in your
// browser.

let userIndex2 = prompt("EXERCISE 9-g: \n Enter the index number where you want to delete colors.");
let userNum = prompt("EXERCISE 9-g: \n Enter the number of colors you wanna delete.");

colors2.splice(userIndex2, userNum);

console.log("Updated Array(g):", colors2);

console.log(footer);

// ex 10

let num = [320, 230, 480, 120];
console.log("EXERCISE 10");
console.log("Scores of Students:", num.join(","));

let sortedNum = num.sort(function(a, b){return a - b});
console.log("Ordered Scores of Students:", sortedNum.join(","));

console.log(footer);

//ex 11

let cities = ["Karachi", "Lahore", "Islamabad", "Quetta", "Peshawar"];
let selectedCities = cities.slice(2, 4);

console.log("EXERCISE 11");
console.log("Cities List:", cities);
console.log("Selected Cities List:", selectedCities);
console.log(footer);

// ex 12


var arr = ["This", "is", "my", "cat"];
console.log("EXERCISE 12");
console.log(arr.join(" "));
console.log(footer);


// ex 13

let fifoArr = [];
fifoArr.push("Keyboard");
fifoArr.push("Mouse");
fifoArr.push("Printer");
fifoArr.push("Monitor");

console.log("EXERCISE 13");
console.log("Devices:", fifoArr);

console.log("Out:", fifoArr.shift());
console.log("Out:", fifoArr.shift());
console.log("Out:", fifoArr.shift());
console.log("Out:", fifoArr.shift());

console.log(footer);

// ex 14

let lifoArr = [];
lifoArr.push("Keyboard");
lifoArr.push("Mouse");
lifoArr.push("Printer");
lifoArr.push("Monitor");

console.log("EXERCISE 14");
console.log("Devices:", lifoArr);

console.log("Out:", lifoArr.pop());
console.log("Out:", lifoArr.pop());
console.log("Out:", lifoArr.pop());
console.log("Out:", lifoArr.pop());

console.log(footer);

// ex 15

let manufacturers = ["Apple", "Samsung", "Motorola", "Nokia", "Sony", "Haier"];

document.write("<select>");

document.write("<option>" + manufacturers[0] + "</option>");
document.write("<option>" + manufacturers[1] + "</option>");
document.write("<option>" + manufacturers[2] + "</option>");
document.write("<option>" + manufacturers[3] + "</option>");
document.write("<option>" + manufacturers[4] + "</option>");
document.write("<option>" + manufacturers[5] + "</option>");

document.write("</select>");










