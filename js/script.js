function stuffFunction() {
    document.getElementById("stuff").innerHTML = "Shorty JavaScript is working";
}

var player;

function startGame() {
    player = new component(30, 30, "blue", 10, 120);
    gameArea.start();
}

var gameArea = {
    canvas: document.createElement("canvas"),
    start: function () {
        this.canvas.width = 600;
        this.canvas.height = 400;
        this.context = this.canvas.getContext("2d");
        document.body.insertBefore(this.canvas, document.body.childNodes[0]);
        this.interval = setInterval(updateGameArea, 20);

        window.addEventListener("keydown", function (e) {
            gameArea.key = e.keyCode;
        })

    },
    clear: function () {
        this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
    }
}

function component(width, height, color, x, y) {
    this.width = width;
    this.height = height;
    this.color = color;
    this.speedX = 0;
    this.speedY = 0;
    this.x = x;
    this.y = y;
    this.update = function () {
        ctx = gameArea.context;
        ctx.fillStyle = color;
        ctx.fillRect(this.x, this.y, this.width, this.height);
    }
    this.newPos = function () {
        this.x += this.speedX;
        this.y += this.speedY;

        gameArea.key = false;
    }
}

function updateGameArea() {
    gameArea.clear();
    player.speedX = 0;
    player.speedY = 0;
    if (gameArea.key && gameArea.key == 65 || gameArea.key && gameArea.key == 37) { player.speedX = -30; }
    if (gameArea.key && gameArea.key == 68 || gameArea.key && gameArea.key == 39) { player.speedX = 30; }
    if (gameArea.key && gameArea.key == 87 || gameArea.key && gameArea.key == 38) { player.speedY = -30; }
    if (gameArea.key && gameArea.key == 83 || gameArea.key && gameArea.key == 40) { player.speedY = 30; }
    player.newPos();
    player.update();
}