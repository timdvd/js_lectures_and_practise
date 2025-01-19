/*
    (param1, param2, …, paramN) => { statements }
    (param1, param2, …, paramN) => expression
    // эквивалентно: (param1, param2, …, paramN) => { return expression; }

    // Круглые скобки не обязательны для единственного параметра:
    (singleParam) => { statements }
    singleParam => { statements }

    // Функция без параметров нуждается в круглых скобках:
    () => { statements }
    () => expression
    // Эквивалентно: () => { return expression; }


    // Когда возвращаете литеральное выражение объекта, заключите тело в скобки
    params => ({foo: bar})

    // Остаточные параметры и параметры по умолчанию поддерживаются
    (param1, param2, ...rest) => { statements }
    (param1 = defaultValue1, param2, …, paramN = defaultValueN) => { statements }

    // Деструктуризация тоже поддерживается
    var f = ([a, b] = [1, 2], {x: c} = {x: a + b}) => a + b + c;
    f();  // 6

*/
let num = 20;

// Function Declaration
function showFirstMessage(text){
    console.log(text);
    num = 30;
    console.log(num);
}

function calc(a, b){
    return (a + b);
}

showFirstMessage('Hello World!');
console.log(num);
console.log(calc(4, 5));
console.log(calc(10, 15));
console.log(calc(6, 9));

// Function Expression
let logger = function(){
    console.log('Hello');
};

logger()

// Arrow Function
const calc1 = (a, b) => { return a + b};

const calc2 = (a, b) => {
    console.log('Done');
    return a + b;
};