// First Task
function calculateVolumeAndArea(number) {
    if (typeof (number) !== 'number' || number < 0 || !Number.isInteger(number)) {
        return "При вычислении произошла ошибка";
    }
    
    let volume = 0;
    let squ = 0;
    
    volume = number * number * number;
    squ = 6 * (number * number);
    
    return `Объем куба: ${volume}, площадь всей поверхности: ${squ}`;
}
console.log(calculateVolumeAndArea(10));

// Second Task
function getCoupeNumber(number) {
    if (typeof (number) !== 'number' || number < 0 || !Number.isInteger(number)) {
        return "Ошибка. Проверьте правильность введенного номера места";
    }
    
    if(number === 0 || number > 36){
        return 'Таких мест в вагоне не существует';
    }
    return Math.ceil(number / 4);
}

console.log(getCoupeNumber(31));