'use strict';

// First task
function firstTask() {
    for( let i = 5; i <= 10; i++){
        console.log(i);
    }
}

// Second task
function secondTask() {
    for(let i = 20; i >= 10; i--){
        if(i == 13){
            break;
        }
        console.log(i);
    }
}

// Third task
function thirdTask() {
    for(let i = 2; i <= 10; i+=2){
        console.log(i);
    }
}

// Fourth task


// for (let i = 2; i <= 16; i++) {
//     if (i % 2 === 0) {
//         continue;
//     } else {
//         console.log(i);
//     }
// }

function fourthTask() {
    let i = 2;
    while(i < 16){
        i++;
        if (i % 2 === 0) {
            continue;
        }
        console.log(i);
    }
}

// Fifth task

function fifthTask() {
    const arrayOfNumbers = [];

    for(let i = 5; i <= 10; i++){
        arrayOfNumbers.push(i);
    }
    return arrayOfNumbers;
}