function pow(x, n){
    let result = 1;
    for(let i = 0; i < n; i++){
        result *= x;
    }
    return result;
}


function pow1(x, n){
    if(n === 1){
        return x;
    }else {
        return x * pow(x, n-1);
    }
}

console.log(pow(2, 1));
console.log(pow(2, 2));
console.log(pow(2, 3));
console.log(pow(2, 4));

console.log(pow1(2, 1));
console.log(pow1(2, 2));
console.log(pow1(2, 3));
console.log(pow1(2, 4));

const students = {
    js: [{
        name: 'John',
        progress: 100
    }, {
        name: 'Ivan',
        progress: 50
    }],

    html: {
        basic: [{
            name: 'Peter',
            progress: 20
        }, {
            name: 'Ann',
            progress: 25
        }],

        pro: [{
            name: 'Sam',
            progress: 2
        }]
    }
};

function getTotal(data){
    let total = 0;
    let students = 0;

    for(let course of Object.values(data)){
        if(Array.isArray(course)){
            students += course.length;
            for(let i = 0; i < course.length; i++){
                total += course[i].progress;
            }
        }else{
            for(let subCourse of Object.values(course)){
                students += subCourse.length;
                for(let i = 0; i < subCourse.length; i++){
                    total += subCourse[i].progress;
                }
            }
        }
    }

    return total / students;
}



