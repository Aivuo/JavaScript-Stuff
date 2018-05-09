//No longer needed code

class wallBlock {
    constructor(width, height, color, x, y, indexX, indexY) {
        this.width = width;
        this.height = height;
        this.color = color;
        this.x = x;
        this.y = y;
        this.positionX = indexX;
        this.positionY = indexY;
        // console.log(this.positionX);
        // console.log(this.positionY);
        this.update = function () {
            ctx = gameArea.context;
            ctx.fillStyle = this.color;
            ctx.fillRect(this.x, this.y, this.width, this.height);
        };
    }
}

class goalBlock {
    constructor(width, height, color, x, y, indexX, indexY) {
        this.width = width;
        this.height = height;
        this.color = color;
        this.x = x;
        this.y = y;
        this.positionX = indexX;
        this.positionY = indexY;
        this.update = function () {
            ctx = gameArea.context;
            ctx.fillStyle = color;
            ctx.fillRect(this.x, this.y, this.width, this.height);
        };
    }
}

class moveBlock {
    constructor(width, height, color, x, y, indexX, indexY) {
        this.width = width;
        this.height = height;
        this.color = color;
        this.x = x;
        this.y = y;
        this.positionX = indexX;
        this.positionY = indexY;
        this.update = function () {
            this.move();
            ctx = gameArea.context;
            ctx.fillStyle = color;
            ctx.fillRect(this.x, this.y, this.width, this.height);
        };
        this.move = function () {
            if (this.type == "move") {
                if (this.positionX == player.positionX && this.positionY == player.positionY) {
                    if (this.positionX < player.formerPositionX && this.positionY == player.formerPositionY) {
                        this.x -= 30;
                        this.positionX -= 1;
                    }
                    if (this.positionX > player.formerPositionX && this.positionY == player.formerPositionY) {
                        this.x += 30;
                        this.positionX += 1;
                    }
                    if (this.positionY < player.formerPositionY && this.positionX == player.formerPositionX) {
                        this.y -= 30;
                        this.positionY -= 1;
                    }
                    if (this.positionY > player.formerPositionY && this.positionX == player.formerPositionX) {
                        this.y += 30;
                        this.positionY += 1;
                    }
                }
            }
        };
    }
}