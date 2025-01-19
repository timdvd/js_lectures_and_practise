// First Task
function getTimeFromMinutes(number) {
    let result = '';
    if(typeof(nuber) == 'string' || number < 0 || !Number.isInteger(number)){
        return 'Ошибка, проверьте данные';
    }else{
        let hours = Math.floor(number / 60);
        let minutes = number % 60;
        
        let hourstring = '';
        switch(hours){
            case 0:
                hourstring = 'часов';
                break;
            case 1:
                hourstring = 'час';
                break;
            case 2:
            case 3:
            case 4:
                hourstring = 'часа';
                break;
            default:
                hourstring = 'часов';
        }
        return result = `Это ${hours} ${hourstring} и ${minutes} минут`
    }
}

console.log(getTimeFromMinutes(415));

// Second Task
function findMaxNumber(num1, num2, num3, num4) {
    let maximum;
    if(typeof(num1) !== 'number' || typeof(num2) !== 'number' || typeof(num3) !== 'number' || typeof(num4) !== 'number'){
        return 0;
    }else{
        maximum = Math.max(num1, num2, num3, num4);
    }
    return maximum;
}

console.log(findMaxNumber(4, 15, 2, 12));