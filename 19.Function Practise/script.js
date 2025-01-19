function fib(number) {
    if (typeof(number) !== 'number' || number <= 0 || !Number.isInteger(number)) {
        return "";
    }
    let result = '';
    let a = 0;
    let b = 1;
    
    for (let i = 0; i < number; i++) {
        if (i + 1 === number) {
            result += `${a}`;

        } else {
            result += `${a} `;
        }

        let c = a + b;
        a = b;
        b = c;
    }
    return result;
}

console.log(fib(4));