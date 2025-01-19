// First Task
function sayHello(name) {
    return "Hello, " + name + '!';
}

// Second Task
function returnNeighboringNumbers(number) {
    let arr = [number-1, number, number+1];
    return arr;
}

// Third Task
function getMathResult(number, times) {
    if (typeof(times) !== 'number' || times <= 0) {
        return number;
    }
    let str = '';
    for(let i = 1; i <= times; i++){
        if(i === times){
            str += `${number * i}`;
        }else{
            str += `${number * i}---`;
        }
    }
    return str;
}