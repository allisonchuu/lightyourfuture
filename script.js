const start = document.querySelector(".start");
const character = document.querySelector(".character");

var startG = start.getBoundingClientRect();
var characterG = character.getBoundingClientRect();

 $(document).keydown(function(e) {
    if (e.which == '39') { //Right arrow key
        $(".character").finish().animate({
            left: "+=50"
        });
    }
    if (e.which == '37') { //left arrow key
        $(".character").finish().animate({
            left: "-=50"
        });
    }
    if (e.which == '40') { //down arrow key
        $(".character").finish().animate({
            top: "+=50"
        });
    }
    if (e.which == '38') { //up arrow key
        $(".character").finish().animate({
            top: "-=50"
        });
    }
    startGame();
});

function startGame(){
    console.log(character.x);
    console.log(start.x);
    if(character.x >= start.x){
        window.location = "game.html";
    }
}