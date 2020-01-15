function loop() {
    window.game.update();
    requestAnimationFrame(loop);
}

function main() {
    window.game = new Game();
    loop();
}

window.onload = main;