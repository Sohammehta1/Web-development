// add sounds as above 
var tom1 = new Audio('sounds/tom-1.mp3');
// tom1.playbackRate = 2; // Play at 2x speed

var tom2 = new Audio('sounds/tom-2.mp3');
// tom2.playbackRate = 2; // Play at 2x speed

var tom3 = new Audio('sounds/tom-3.mp3');
// tom3.playbackRate = 2; // Play at 2x speed

var tom4 = new Audio('sounds/tom-4.mp3');
// tom4.playbackRate = 2; // Play at 2x speed

var snare= new Audio('sounds/snare.mp3');
// snare.playbackRate = 2; // Play at 2x speed

var crash = new Audio('sounds/crash.mp3');
// crach.playbackRate = 2; // Play at 2x speed

var kick = new Audio('sounds/kick.mp3');
// kick_bass.playbackRate = 2; // Play at 2x speed


var drum_list = $('.drum');
// var body = document.getElementsByTagName('body')[0];
var names    = ['tom1','tom2','tom3','tom4','snare','crash','kick'];






function display_animation(key){
    $(`.${key}`).addClass('pressed');

    
    setTimeout(function(){
        $(`.${key}`).removeClass('pressed');
    },100)
}

function make_sound(key){
    switch (key) {
    case 'w':
        tom1.play();
        break;
    case 'a':
        tom2.play();
        break;
    case 's':
        tom3.play();
        break;
    case 'd':
        tom4.play();
        break;
    case 'j':
        snare.play();
        break;
    case 'k':
        crash.play();
        break;
    case 'l':
        kick.play();
        break;
    default:
        // Handle other keys if needed
        break;
}}

for(let i = 0;i<drum_list.length;i++){
    drum_list[i].style.background =`url(images/${names[i]}.png)`;

    

    drum_list[i].addEventListener('click', function(){
        var button_innerHTML = this.innerHTML;
        make_sound(button_innerHTML);
        display_animation(button_innerHTML);
    })
}


$(document).keydown(function(key){
    var key = event.key.toLowerCase();
    display_animation(key);
    make_sound(key);
});





