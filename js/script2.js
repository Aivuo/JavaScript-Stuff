var currentLVL = 0;

var gameArea = {
    canvas : document.createElement("canvas"),
    start: function() {
        this.canvas.width = 570;
        this.canvas.height = 480;
        this.context = this.canvas.getContext("2d");
        document.body.insertBefore(this.canvas, document.body.childNodes[0]);
        this.interval = setInterval(updateGameArea, 20);

        for (const key in mapsArray[currentLVL].mapGrid) {
            console.log(key);
            
        }

    },
    clear: function () {
        this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
    }
}

function startGame()
{
    gameArea.start();
}

function updateGameArea() {
    gameArea.clear();
}