// let dogName = "Bobo";
// let dogWeight = 23;
// if (dogWeight > 20) {
//     console.log(dogName + " says WOOF WOOF");

// }
// else {
//     console.log(dogName + " says woof woof")
// }



// dogName = "Jon";
// dogWeight = 25;
// if (dogWeight > 20) {
//     console.log(dogName + " says WOOF WOOF");

// }
// else {
//     console.log(dogName + " says woof woof")
// }




// dogName = "Bob";
// dogWeight = 30;
// if (dogWeight > 20) {
//     console.log(dogName + " says WOOF WOOF");

// }
// else {
//     console.log(dogName + " says woof woof")
// }


// function bark(dogName, dogWeight) {
//     if (dogWeight > 20) {
//     console.log(dogName + " says WOOF WOOF");

// }
// else {
//     console.log(dogName + " says woof woof");
// }

// }

// bark("Bobo", 23);
// bark("Spike", 18);
// bark("Jon", 20);
// bark("Oka", 30);



// let x = 32;
// let y = 44;
// let radius = 5;

// let centerX = 0;
// let centerY = 0;
// let width = 600;
// let height = 400;

// function setup(width, height) 
// {centerX = width / 2;
// centerY = height / 2;

// }



// function computeDistance(x1, y1, x2, y2) {
//     let dx = x1 - x2;
//     let dy = y1 - y2;
//     let d2 = (dx * dx) + (dy * dy);
//     let d = Math.sqrt(d2);
//     return d;
// }

// function circleArea(r) {
//     let area = Math.PI * r * r;
//     return area;

// }

// setup(width,height); 
// let area = circleArea(radius);
// let distance = computeDistance(x, y, centerX, centerY);
// alert("Area: " + area);
// alert("distance: " + distance);






// let scores = [60, 50, 60, 58, 54, 54, 58, 50, 52, 54, 48, 69,
//      34, 55, 51, 52, 44, 51, 69, 64, 66, 55, 52, 61, 46, 31,
//       37, 52, 44, 18, 41, 53, 55, 61, 51, 44];

// let i = 0;
// let highScore = 0;
// while (i < scores.length) {
//     console.log("Bubble solution #" + i + " score " + scores[i])
//     if (scores[i] > highScore) {
//         highScore = scores[i];

//     }

//     i = i + 1;
// }

// console.log("Bubble tests: " + scores.length);
// console.log("highest bubble score: " + highScore);


// let bestSolutions = [];
// for (let i = 0; i < scores.length; i++) {
//     if (scores[i] == highScore) {
//         bestSolutions.push(i);
//     }
// }


// console.log("Solutions with the highest score: " + bestSolutions);


// let numbers = new Array(1, 2, 3, 4, 5);
// console.log(numbers);

// let values = new Array(5);
// console.log(values);

// let arr = Array.of(5);
// console.log(arr);

// let arr = [1,2,3]; //add one to back
// arr.push(4);
// console.log(arr);


// arr.pop(); //removes the one that we added
// console.log(arr);

// arr.unshift(0); //move to front
// console.log(arr);

// arr.shift(); //remove 
// console.log(arr)

// console.log(arr.indexOf(2)); //prints 1 because 0, 1, 2
// console.log(arr.indexOf(18)); // prints -1 not found



// console.log(arr.lastIndexOf(2));
// console.log(arr.includes(1)); //returns truee
// console.log(arr.includes(18)); //returns false


// arr.splice(2,0,10,20);

// console.log(arr);


// let sliced = arr.slice(1,4); 
// console.log(sliced)


// let arr1 = [1,2,3];
// let arr2 = [4,5,6];


// let combined = arr1.concat(arr2)
// console.log(combined)

// let words = ["Hello", "world"]
// console.log(words.join(" ")); //string

// let sentence = "js sucks";
// let wordsArray = sentence.split(" "); //js, sucks


// function add(a, b) {
//     return a + b;
// }

// console.log(add(2,3));

// let add_arrow = (a,b) => a + b;

// let multiply = (a,b) => {
//     console.log(`multiplying ${a} and ${b}`);
//     return a * b
// }

// const square = x => x * x;
// console.log(square(6));



// const greet = () => "hello world!";
// console.log(greet())


let access = document.getElementById("code1");
let code = access.innerHTML;
code += " midnight"
alert(code)















































