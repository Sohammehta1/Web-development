var drum_list = document.querySelectorAll('.drum');
// console.log(drum_list);
drum_list[0].style.background ='url(images/tom1.png)';
drum_list[1].style.background ='url(images/tom2.png)';
drum_list[2].style.background ='url(images/tom3.png)';
drum_list[3].style.background ='url(images/tom4.png)';
drum_list[4].style.background ='url(images/snare.png)';
drum_list[5].style.background ='url(images/crash.png)';
drum_list[6].style.background ='url(images/kick.png)';

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

var kick_bass = new Audio('sounds/kick-bass.mp3');
// kick_bass.playbackRate = 2; // Play at 2x speed


drum_list[0].addEventListener('click',function(){
    tom1.play();});
drum_list[1].addEventListener('click',function(){tom2.play();});
drum_list[2].addEventListener('click',function(){tom3.play();});
drum_list[3].addEventListener('click',function(){tom4.play();});
drum_list[4].addEventListener('click',function(){snare.play();});
drum_list[5].addEventListener('click',function(){crash.play();});
drum_list[6].addEventListener('click',function(){kick_bass.play();});

var body = document.getElementsByTagName('body')[0];
document.addEventListener('keypress', function (event) {
    event = event || window.event;
    const key = event.key.toLowerCase(); // Convert key to lowercase for consistency

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
            kick_bass.play();
            break;
        default:
            // Handle other keys if needed
            break;
    }
});

