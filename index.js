// handle button press
var numberOfButtons = document.querySelectorAll(".drum").length
for (var i = 0; i < numberOfButtons; i++) {
    document.querySelectorAll("button")[i].addEventListener("click", function () {
        var buttonHTML = this.innerHTML;
        makeSound(buttonHTML);
        buttonAnimation(buttonHTML)
    });
}

// handle keyboard press
document.addEventListener("keydown", function (event) {
    makeSound(event.key);
    buttonAnimation(event.key)
});

function makeSound (key) {
    switch (key) {
        case "w":
        case "W":
            var tom1 = new Audio('sounds\\tom-1.mp3');
            tom1.play();
            break;
        
        case "a":
        case "A":
            var tom2 = new Audio('sounds\\tom-2.mp3');
            tom2.play();
            break;

        case "s":
        case "S":
            var tom3 = new Audio('sounds\\tom-3.mp3');
            tom3.play();
            break;

        case "d":
        case "D":
            var tom4 = new Audio('sounds\\tom-4.mp3');
            tom4.play();
            break;

        case "j":
        case "J":
            var snare = new Audio('sounds\\snare.mp3');
            snare.play();
            break;
        
        case "k":
        case "K":
            var crash = new Audio('sounds\\crash.mp3');
            crash.play();
            break;
        
        case "l":
        case "L":
            var kickBass = new Audio('sounds\\kick-bass.mp3');
            kickBass.play();
            break;
        
        default:
            var wrong = new Audio('sounds\\wrong.mp3');
            wrong.play();
    }
}

function buttonAnimation(currentKey) {

    var activeButton = document.querySelector("." + currentKey.toLowerCase());
    activeButton.classList.add("pressed");

    setTimeout(function() {
    activeButton.classList.remove("pressed");
    }, 100);

}
