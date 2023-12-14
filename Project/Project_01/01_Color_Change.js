const button = document.querySelector('.button');
const body = document.querySelector('body');

button.forEach(function (button) {
    console.log(button);
    button.addEventListener('click', function(e) {
        console.log(e);
        console.log(e.target);
        if(e.target === 'grey'){
        body.style.backgroundColor = e.target.id;
    }
    if (e.target === 'white') {
        body.style.backgroundColor = e.target.id;
    }
    if (e.target === 'blue') {
        body.style.backgroundColor = e.target.id;
    }
    if (e.target === 'red') {
        body.style.backgroundColor = e.target.id;
    }
    });
});