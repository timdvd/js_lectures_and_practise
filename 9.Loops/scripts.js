'use strict';

// Loop «while»
/*
    while (condition) {
        // code
        // loop's body
    }


    let i = 3;
    while (i) { // когда i будет равно 0, условие станет ложным, и цикл остановится
        alert( i );
    i--;
}
*/

// Loop «do…while»
/* 
    do {
        // loop's body
    } while (condition);


    let i = 0;
    do {
        alert( i );
        i++;
    } while (i < 3);
*/

// Loop «for»
/*
    for (start; condition; step) {
        // ... loop's body ...
    }


    for (let i = 0; i < 3; i++) {
        alert(i);
    }
*/

let num = 50;

// while example
while(num <= 55){
    console.log(num);
    num++;
}

// do while example
do{
    console.log(num);
    num++;
}while(num <= 50);

// for example
for(let i = 1; i < 8; i++){
    console.log(i);
    if( i == 4) continue;
    if( i == 6) break;
}



// *
// **
// ***
// ****
// *****
// ******
// *******

let result = '';
const length = 7;

for(let i = 1; i < length; i++){
    for(let j = 0; j < i; j++){
        result += '*';
    }
    result += '\n';
}
console.log(result);


for(let i = 0; i < 3; i++){
    console.log(`First level ${i}`);
    for(let j = 0; j < 3; j++){
        console.log(`Second level ${j}`);
        for(let k = 0; k < 3; k++){
            console.log(`Third level ${k}`);
        }
    }
}