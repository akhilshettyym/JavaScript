/*
LOOPS :
for, while, do-while, break, continue, for-of, forEach for arrays, for-in  
*/

// for - From where to start -> Upto where to go -> How to go
for(let i=1; i<=10; i++) {
    // console.log(i);
}

// while - From where to start -> When to stop -> How to go
let i = 1;
while(i<=10){
    // console.log(i);
    i++;
}

// do-while
let j = 20;
do{
    // console.log(j);
    j++;
}
while(j<10);

// continue
for(let k=1; k<20; k++){
    if(k==12){
        continue;
    }
    // console.log(k)
}

//01. Print numbers from 1 to 10 using for loop.
for(let i=1; i<=10; i++){
    // console.log(i);
}

//02. Print numbers from 10 to 1 using while loop.
let a = 10;
while(a>=1){
    // console.log(a);
    a--;
}

//03. Print even numbers from 1 to 20 using for loop.
for(let b=1; b<=20; b++){
    if(b%2 == 0){
        // console.log(b);
    }
}

//04. Print odd numbers from 1 to 15 using while loop.
let c = 1;
while(c<=15){
    if(c%2 !== 0){
        // console.log(c++);
    }
}

//05. Print the multiplication table of 5.
for(let d = 1; d<=10; d++){
    let mul = 5*d;
    // console.log(mul);
}

//06. Find the sum of numbers from 1 to 100 using a loop.
let sum = 0; 
let e = 1;
let f = 1;
while (f <= 100) {
  sum = sum + e;
  f++;
  e++;
}
// console.log(sum);

//07. Print all numbers between 1 to 50 that are divisible by 3.
for(let g=1; g<=50; g++){
    if(g%3 == 0){
        // console.log(g);
    }
}

//08. Ask the user for a number and print whether each number and print
//    whether each number from 1 to that number is even or odd.
let val = prompt("Give a number");
for(let h=1; h<=val; h++){
     if(i%2 == 0){
        console.log(`${i} is even`);
     } else {
        console.log(`${i} is odd`);
     }
}

//09. Count how many numbers between 1 to 100 are divisible by both 3 and 5.
for(let i = 1; i<= 100; i++){
     if(i%3 === 0 && i%5 === 0){
        console.log(i);
     }
}


//01. Stop at first multiple of 7
// Write a loop from 1 to 100 that :
// - Prints each number
// - Stops completely when it finds the first number divisible by 7
for(let i=1; i<=100; i++) {
    console.log(i);
    if(i%7 === 0) {
        break;
    }
}

//02. Skip Multiples of 3
// Write a loop from 1 to 20 that :
// - Skips numbers divisible by 3
// - Prints all others. use continue
for(let i=1; i<=20; i++){
    if(i%3 === 0) continue;
    console.log(i);
}

//03. Print first 5 Odd Numbers only
// Write a loop from 1 to 100 that :
// - Prints only 5 odd numbers
// - Then stops the loop
// Use both if, continue, and a counter + break
let count = 0;
for(let i=1; i<=100; i++){
    if(i%2 != 0) {
            console.log(i);
            count++;
    }
    if(count===5) break;
}