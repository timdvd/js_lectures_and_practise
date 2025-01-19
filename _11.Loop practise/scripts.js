'use strict';

// First task
function firstTask() {
    const arr = [3, 5, 8, 16, 20, 23, 50];
    const result = [];

    for(let i = 0; i < arr.length; i++){
        result.push(arr[i]);
    }
    return result;
}

// Second task
function secondTask() {
    const data = [5, 10, 'Shopping', 20, 'Homework'];

    for(let i = 0; i < data.length; i++){
        if(typeof(data[i]) == 'string'){
            data[i] = data[i] + ' - done';
        }else{
            data[i] = data[i]*2;
        }
    }
    
    return data;
}

// Third task
function thirdTask() {
    const data = [5, 10, 'Shopping', 20, 'Homework'];
    const result = [];

    for(let i = data.length - 1; i >= 0; i--){
        result.push(data[i]);
    }
    
    return result;
}