window.onload = function () {
    
    let canvas = document.getElementById('game');
    let context = canvas.getContext('2d');

    let grid = 16;
    let count = 0;
    
    let snake = {
        x: 160,
        y: 160,
        dx: grid,
        dy: 0,
        cells: [],
        maxCells: 4
    };

    let apple = {
        x: 320,
        y: 320
    };

    function getRandomInt(min, max) {
        return Math.floor(Math.random() * (max - min)) + min;
    };

    function loop() {

        requestAnimationFrame(loop);

        if(++count < 5) return;

        count = 0;
        context.clearRect(0,0,canvas.width,canvas.height);

        snake.x += snake.dx;
        snake.y += snake.dy;

        if(snake.x < 0) snake.x = canvas.width - grid;
        else if(snake.x >= canvas.width) snake.x = 0;
        
        if(snake.y < 0) snake.y = canvas.height - grid;
        else if(snake.y >= canvas.height) snake.y = 0;

        snake.cells.unshift({x: snake.x, y: snake.y});

        if(snake.cells.length > snake.maxCells) snake.cells.pop();

        context.fillStyle = "#0099FF";
        context.fillRect(apple.x, apple.y, grid-1, grid-1);

        context.fillStyle = "#0099FF";
        snake.cells.forEach(function(cell, index) {
        
            context.fillRect(cell.x, cell.y, grid-1, grid-1);  

            if (cell.x === apple.x && cell.y === apple.y) {

                snake.maxCells++;
                document.getElementById("gameScore").innerText = snake.maxCells - 4 +'/8';
                if(document.getElementById("gameScore").innerText.charAt(0) > 7) redirect();
                apple.x = getRandomInt(0, 25) * grid;
                apple.y = getRandomInt(0, 25) * grid;

            };

            for (let i = index + 1; i < snake.cells.length; i++) {
        
            if(cell.x === snake.cells[i].x && cell.y === snake.cells[i].y) {

                snake.x = 160;
                snake.y = 160;
                snake.cells = [];
                snake.maxCells = 4;
                snake.dx = grid;
                snake.dy = 0;

                apple.x = getRandomInt(0, 25) * grid;
                apple.y = getRandomInt(0, 25) * grid;

                document.getElementById("gameScore").innerText = 0;

            };
        };

        });

    };

    function sleep(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
      }

    document.addEventListener('touchstart', function(e){
        var touch = e.changedTouches[0]
        startX = touch.pageX
        startY = touch.pageY
        startTime = new Date().getTime()
        e.preventDefault()  
    }, false)
    
    document.addEventListener('touchmove', function(e){
        e.preventDefault()
    }, false)
    
    document.addEventListener('touchend', function(e){
        var touch = e.changedTouches[0]
        distX = touch.pageX - startX
        distY = touch.pageY - startY
    
        if (Math.abs(distX) > Math.abs(distY)) {
          if (distX > 0 && snake.dx === 0) {
            snake.dx = grid;
            snake.dy = 0;
          }
          else if (distX < 0 && snake.dx === 0) {
            snake.dx = -grid;
            snake.dy = 0;
          }
        } else {
          if (distY > 0 && snake.dy === 0) {
            snake.dy = grid;
            snake.dx = 0;
          }
          else if (distY < 0 && snake.dy === 0) {
            snake.dy = -grid;
            snake.dx = 0;
          }
        }
        e.preventDefault();
    
    }, false)

    async function redirect () {

        let currentScore = document.getElementById("gameScore").innerText.charAt(0);
        if(currentScore < 8) {
            alert("hey dont cheat >:(");
            rediirect();
        };
        
        document.getElementById("startButton").innerText = "redirecting you to jensen's super secret page...";
        document.getElementById("gameBoardContainer").classList.add("peekaboo");
        document.getElementById("startButton").classList.remove("peekaboo")
        localStorage.setItem('playedGame', true);
        await sleep(1000);
        window.location.href = "/secret";

    };

    document.addEventListener('keydown', function(e) {

        if(e.which === 37 && snake.dx === 0) {

            snake.dx = -grid;
            snake.dy = 0;

        } else if(e.which === 38 && snake.dy === 0) {

            snake.dy = -grid;
            snake.dx = 0;

        } else if(e.which === 39 && snake.dx === 0) {

            snake.dx = grid;
            snake.dy = 0;

        } else if(e.which === 40 && snake.dy === 0) {

            snake.dy = grid;
            snake.dx = 0;
        };

    });

    function startGame() {
        document.getElementById("startButton").classList.add("peekaboo")
        document.getElementById("startGame").classList.add("peekaboo")
        document.getElementById("homeButton").classList.add("peekaboo")
        document.getElementById("gameBoardContainer").classList.remove("peekaboo")
        requestAnimationFrame(loop);
    }

    document.getElementById("startGame").onclick = startGame;

    document.getElementById("startGame").addEventListener('touchstart', startGame)

};