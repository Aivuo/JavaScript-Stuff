var currentLVL = 0;
var walls = [];
var blocks = [];
var player;

var gameArea = {
    canvas: document.createElement("canvas"),
    start: function () {
        this.canvas.width = 570;
        this.canvas.height = 480;
        this.context = this.canvas.getContext("2d");
        document.body.insertBefore(this.canvas, document.body.childNodes[0]);
        this.interval = setInterval(updateGameArea, 20);



        //Går igenom hela arrayen och skriver ut allt i loggen.
        for (let index = 0; index < mapsArray[currentLVL].mapGrid.length; index++) {
            for (let index2 = 0; index2 < mapsArray[currentLVL].mapGrid[index].length; index2++) {

                switch (mapsArray[currentLVL].mapGrid[index][index2].toString()) {
                    case "W":
                        walls.push(new wallBlock(30, 30, "red", index2 * 30, index * 30));
                        console.log("Woop");
                        break;
                    case "G":
                        walls.push(new wallBlock(30, 30, "yellow", index2 * 30, index * 30));
                        console.log("Goop");
                        break;

                    case "B":
                        blocks.push(new moveBlock(30, 30, "green", index2 * 30, index * 30));
                        console.log("Bloop");
                        break;

                    case "P":
                        player = new playerBlock(30, 30, "blue", index2 * 30, index * 30);
                        console.log("Ploop");
                        break;

                    default:
                        break;
                }
                //console.log(mapsArray[currentLVL].mapGrid[index][index2]);
            }
            /* for (const key in mapsArray[currentLVL].mapGrid[index]) {
                
            } */
            console.log("Switch!");
        }

        window.addEventListener("keydown", function (e) {
            gameArea.key = e.keyCode;
        })

    },
    clear: function () {
        this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
    }
}

function wallBlock(width, height, color, x, y) {
    this.width = width;
    this.height = height;
    this.color = color;
    this.x = x;
    this.y = y;
    this.update = function () {
        ctx = gameArea.context;
        ctx.fillStyle = color;
        ctx.fillRect(this.x, this.y, this.width, this.height);
    }
}

function moveBlock(width, height, color, x, y) {
    this.width = width;
    this.height = height;
    this.color = color;
    this.x = x;
    this.y = y;
    this.update = function () {
        ctx = gameArea.context;
        ctx.fillStyle = color;
        ctx.fillRect(this.x, this.y, this.width, this.height);
    }
}

function playerBlock(width, height, color, x, y) {
    this.width = width;
    this.height = height;
    this.color = color;
    this.speedX = 0;
    this.speedY = 0;
    this.x = x;
    this.y = y;

    this.move = function (){
        var myleft = this.x;
        var myright = this.x + (this.width);
        var mytop = this.y;
        var mybottom = this.y + (this.height);
        var otherleft = intersectingObject.x;
        var otherright = intersectingObject.x + (intersectingObject.width);
        var othertop = intersectingObject.y;
        var otherbottom = intersectingObject.y + (intersectingObject.height);


    }

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

function startGame() {
    gameArea.start();
}

function updateGameArea() {
    gameArea.clear();
    player.speedX = 0;
    player.speedY = 0;
    for (i = 0; i < walls.length; i++) {
        walls[i].update();
    }
    for (i = 0; i < blocks.length; i++) {
        blocks[i].update();
    }
    if (gameArea.key && gameArea.key == 65 || gameArea.key && gameArea.key == 37) { player.speedX = -30; }
    if (gameArea.key && gameArea.key == 68 || gameArea.key && gameArea.key == 39) { player.speedX = 30; }
    if (gameArea.key && gameArea.key == 87 || gameArea.key && gameArea.key == 38) { player.speedY = -30; }
    if (gameArea.key && gameArea.key == 83 || gameArea.key && gameArea.key == 40) { player.speedY = 30; }
    
    player.newPos();
    player.update();

}