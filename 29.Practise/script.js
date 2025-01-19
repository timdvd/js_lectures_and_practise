/* Задание на урок:

1) Автоматизировать вопросы пользователю про фильмы при помощи цикла

2) Сделать так, чтобы пользователь не мог оставить ответ в виде пустой строки,
отменить ответ или ввести название фильма длинее, чем 50 символов. Если это происходит - 
возвращаем пользователя к вопросам опять

3) При помощи условий проверить  personalMovieDB.count, и если он меньше 10 - вывести сообщение
"Просмотрено довольно мало фильмов", если от 10 до 30 - "Вы классический зритель", а если больше - 
"Вы киноман". А если не подошло ни к одному варианту - "Произошла ошибка"

4) Потренироваться и переписать цикл еще двумя способами*/

'use strict';

let numberOfFilms;


const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: {},
    privat: false, 
    start: function(){
        personalMovieDB.count = +prompt('Сколько фильмов вы уже посмотрели?', '');
        while(personalMovieDB.count == '' || personalMovieDB.count == null || isNaN(personalMovieDB.count)){
            personalMovieDB.count = +prompt('Сколько фильмов вы уже посмотрели?', '');
        }
    },
    rememberMyFilms: function(){
        for(let i = 0; i < 2; i++){
            const a = prompt('Один из последних фильмов?', '').trim();
            const b = prompt('На сколько оцените его', '').trim();
        
            if(a != null && b != null && a!= '' && b != '' && a.length < 50){
                personalMovieDB.movies[a] = b;
                console.log('Done');
            }else {
                console.log('error');
                i--;
            }
        }
    },
    detectPersonalLevel: function(){
        if(personalMovieDB.count < 10){
            console.log('Просмотрено довольно мало фильмов');
        }else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30){
            console.log('Нормальный зритель');
        }else if (personalMovieDB.count >= 30){
            console.log('Вы киноман');
        }else{
            console.log('Произогшла ошибка');
        }
    },
    toggleVisibleDB: function(){
        if(personalMovieDB.privat){
            personalMovieDB.privat = false;
        }else{
            personalMovieDB.privat = true;
        }
    },
    showMyDB: function(hidden){
        if(!hidden){
            console.log(personalMovieDB);
        }
    },
    writeYourGenres: function(){
        for(let i = 1; i < 2; i++){
            let genres = prompt(`Ваш любимый жанр через запятую`).toLocaleLowerCase();
            if(genres === '' || genres == null){
                console.log('Вы ввели некоректные данные');
                i--;
            }else{
                personalMovieDB.genres[i - 1] = genres.split(', ');
                personalMovieDB.genres.sort();
            }
        }

        personalMovieDB.genres.forEach((element, i) => {
            console.log(`Любимый жанр ${i + 1} - ${element}`);
        });
    },
}
