const btn = document.querySelector('button');
const btn2 = document.querySelectorAll('button')[1];

btn.onclick = function(){
    alert('Click');
}

btn.addEventListener('click', () => {
    alert('Click123');
});

btn.addEventListener('mouseenter', (e) => {
    console.log(e.target);
    e.target.remove();
    alert('hover');
});

const deleteElement = (e) => {
    e.target.remove();
};

let i = 0;
const deleteElement = (e) => {
    console.log(e.target);
    i++;
    if(i == 1){
        btn2.removeEventListener('click', deleteElement);
    }
};

btn2.addEventListener('click', deleteElement);

btns.forEach(btn => {
    btn.addEvemtListener('click', deleteElement, {once: true});
});

const link = document.querySelector('a');
link.addEventListener('click', (event) => {
    event.preventDefault();
    console.log(event.target);
});
