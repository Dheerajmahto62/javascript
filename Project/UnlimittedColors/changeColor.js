//  generate a random colors


const randomColor = function(){
    const hex = '0123456789ABCDEF';
    let color = '#';
    for(let i= 0; i<6; i++){
        color += hex[Math.floor(Math.random() * 16)];
    }
    return color;
};

let intervalId
const StartChangingColor = function(){
    if(!intervalId){
        intervalId = setInterval(changeBgColor, 1000)

    }
    
    function changeBgColor() {
        document.body.style.backgroundColor = randomColor();
        console.log("Started")
    }
};

const StopChangingColor = function() {
    clearInterval(intervalId);
    intervalId = null;
    console.log('Stopped')
};

document.querySelector("#start").
addEventListener('click' , StartChangingColor);


document.querySelector('#stop').
addEventListener('click' , StopChangingColor);
