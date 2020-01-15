class Game {
    constructor() {
        this.canvas = document.getElementById("glCanvas");
        this.gl = this.canvas.getContext("webgl") || canvas.getContext("experimental-webgl");


        // Only continue if WebGL is available and working
        if (this.gl === null) {
            alert("Unable to initialize WebGL. Your browser or machine may not support it.");
            return;
        } else {
            console.log("WebGL initialized.");
            // Set clear color to black, fully opaque
            this.gl.clearColor(0.0, 0.0, 0.0, 1.0);
            // Clear the color buffer with specified clear color
            this.gl.clear(this.gl.COLOR_BUFFER_BIT);
            this.gl.enable(this.gl.BLEND);
            this.gl.blendFunc(this.gl.SRC_ALPHA, this.gl.ONE_MINUS_CONSTANT_ALPHA);
            this.gl.viewport(0, 0, this.canvas.width, this.canvas.height);
        }

        let vs = document.getElementById("vs_01").innerHTML;
        let fs = document.getElementById("fs_01").innerHTML;

        this.sprite = new Sprite(this.gl, "./scripts/game/sprites/PUCMM.png", vs, fs);

    }

    update() {
        this.gl.viewport(0, 0, this.canvas.width, this.canvas.height);
        this.gl.clear(this.gl.COLOR_BUFFER_BIT | this.gl.DEPTH_BUFFER_BIT);

        this.sprite.render();

        this.gl.flush();
    }
}