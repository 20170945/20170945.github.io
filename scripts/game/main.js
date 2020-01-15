function loop() {
    window.game.update();
    requestAnimationFrame(loop);
}

document.addEventListener('keydown', function(event) {
    if(event.code ='KeyA') {
        Game.getInstance().gameObjects.pop();
        console.log("Snapped logo");
    }
});

function main() {
    window.game = Game.getInstance();
    loop();
}

window.onload = main;