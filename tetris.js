(function () {
    let isStart = false;
    const tetris = {
      board: [],
      canvas: null,
      curPiece: null,
      nextPiece: null,
      timer: null,
      speed: 700,
      level: 1,
      linesCleared: 0,
      score: 0,
      isPaused: false,
  
      init: function () {
        isStart = true;
        this.canvas = document.getElementById('canvas');
        this.canvas.style.width = `${window.canvasWidth}px`;
        this.canvas.style.height = `${window.canvasHeight}px`;
        this.initBoard();
        this.spawnPiece();
        this.bindKeyEvents();
        this.updateInfo();
        this.countdown(() => this.play());
      },
  
      initBoard: function () {
        const rows = window.canvasHeight / window.pSize;
        const cols = window.canvasWidth / window.pSize;
        this.board = Array.from({ length: rows }, () => Array(cols).fill(0));
      },
  
      spawnPiece: function () {
        if (this.nextPiece) {
          this.curPiece = this.nextPiece;
        } else {
          const type = Math.floor(Math.random() * window.shapes.length);
          this.curPiece = new window.Piece(type, window.spawnX, window.spawnY);
        }
        const type = Math.floor(Math.random() * window.shapes.length);
        this.nextPiece = new window.Piece(type, window.spawnX, window.spawnY);
        this.updateNextPiece();
  
        if (!this.isValidMove(this.curPiece.blocks, this.curPiece.x, this.curPiece.y)) {
          alert('Game Over!');
          clearInterval(this.timer);
        } else {
          this.curPiece.draw(this.canvas);
        }
      },
  
      updateNextPiece: function () {
        const nextShapeCanvas = document.getElementById('next_shape');
        nextShapeCanvas.innerHTML = '';
        this.nextPiece.blocks.forEach(([x, y]) => {
          const el = document.createElement('div');
          el.className = `square type${this.nextPiece.type}`;
          el.style.left = `${(x + 1) * window.pSize}px`;
          el.style.top = `${(y + 1) * window.pSize}px`;
          nextShapeCanvas.appendChild(el);
        });
      },
  
      bindKeyEvents: function () {
        document.addEventListener('keydown', this.handleKey.bind(this));
      },
  
      handleKey: function (e) {
        if (this.isPaused) return;
  
        switch (e.key) {
          case 'ArrowLeft':
          case '4': // Numpad left
            this.movePiece(-1, 0); // left
            break;
          case 'ArrowRight':
          case '6': // Numpad right
            this.movePiece(1, 0); // right
            break;
          case 'ArrowDown':
          case '2': // Numpad down
            this.movePiece(0, 1); // down
            break;
          case 'ArrowUp':
          case 'x':
          case 'X':
          case '5': // Numpad rotate clockwise
          case '1': // Numpad rotate clockwise
          case '9': // Numpad rotate clockwise
            this.rotatePieceClockwise(); // up (rotate)
            break;
          case ' ':
          case '8': // Numpad hard drop
            this.hardDrop(); // hard drop
            break;
          case 'Shift':
          case 'C':
          case 'c':
          case '0': // Numpad hold
            this.holdPiece(); // hold piece
            break;
          case 'Control':
          case 'Z':
          case 'z':
          case '3': // Numpad rotate counterclockwise
          case '7': // Numpad rotate counterclockwise
            this.rotatePieceCounterclockwise(); // rotate counterclockwise
            break;
          case 'Escape':
          case 'F1':
            this.togglePause(); // pause
            break;
          default:
            break;
        }
      },
  
      movePiece: function (dx, dy) {
        const newX = this.curPiece.x + dx;
        const newY = this.curPiece.y + dy;
  
        if (this.isValidMove(this.curPiece.blocks, newX, newY)) {
          this.curPiece.move(dx, dy);
          this.updateBoard();
          this.curPiece.draw(this.canvas);
        } else if (dy === 1) {
          this.lockPiece();
          this.spawnPiece();
        }
      },
  
      rotatePieceClockwise: function () {
        const originalBlocks = [...this.curPiece.blocks];
        this.curPiece.rotate();
  
        if (!this.isValidMove(this.curPiece.blocks, this.curPiece.x, this.curPiece.y)) {
          this.curPiece.blocks = originalBlocks; // revert rotation
        } else {
          this.updateBoard();
          this.curPiece.draw(this.canvas);
        }
      },
  
      rotatePieceCounterclockwise: function () {
        const originalBlocks = [...this.curPiece.blocks];
        this.curPiece.blocks = this.curPiece.blocks.map(([x, y]) => [y, -x]);
  
        if (!this.isValidMove(this.curPiece.blocks, this.curPiece.x, this.curPiece.y)) {
          this.curPiece.blocks = originalBlocks; // revert rotation
        } else {
          this.updateBoard();
          this.curPiece.draw(this.canvas);
        }
      },
  
      hardDrop: function () {
        while (this.isValidMove(this.curPiece.blocks, this.curPiece.x, this.curPiece.y + 1)) {
          this.curPiece.move(0, 1);
        }
        this.lockPiece();
        this.spawnPiece();
      },
  
      holdPiece: function () {
        // Implement hold piece functionality here
        console.log("Hold piece functionality is not yet implemented.");
      },
  
      togglePause: function () {
        if (this.timer) {
          clearInterval(this.timer);
          this.timer = null;
          this.isPaused = true;
          this.countdown(() => {
            this.isPaused = false;
            this.play();
          });
        } else {
          this.isPaused = false;
          this.play();
        }
      },
  
      isValidMove: function (blocks, x, y) {
        return blocks.every(([dx, dy]) => {
          const newX = dx + x;
          const newY = dy + y;
          return (
            newX >= 0 &&
            newX < window.canvasWidth / window.pSize &&
            newY < window.canvasHeight / window.pSize &&
            (newY < 0 || this.board[newY][newX] === 0)
          );
        });
      },
  
      lockPiece: function () {
        this.curPiece.blocks.forEach(([dx, dy]) => {
          const x = this.curPiece.x + dx;
          const y = this.curPiece.y + dy;
          if (y >= 0) {
            this.board[y][x] = this.curPiece.type + 1; // retain shape
          }
        });
        this.clearLines();
      },
  
      clearLines: function () {
        let linesCleared = 0;
        this.board = this.board.filter(row => {
          if (row.every(cell => cell)) {
            linesCleared++;
            return false;
          }
          return true;
        });
        while (this.board.length < window.canvasHeight / window.pSize) {
          this.board.unshift(Array(window.canvasWidth / window.pSize).fill(0));
        }
  
        if (linesCleared > 0) {
          this.updateScore(linesCleared);
          this.linesCleared += linesCleared;
          if (this.shouldLevelUp()) {
            this.levelUp();
          }
          this.updateInfo();
        }
      },
  
      shouldLevelUp: function () {
        const fixedGoal = 10;
        const variableGoal = 5 * this.level;
        return this.linesCleared >= fixedGoal || this.linesCleared >= variableGoal;
      },
  
      levelUp: function () {
        this.level++;
        this.speed *= 0.9; // Increase speed
        clearInterval(this.timer);
        this.play();
      },
  
      updateScore: function (linesCleared) {
        const points = [0, 40, 100, 300, 1200];
        this.score += points[linesCleared] * this.level;
      },
  
      updateInfo: function () {
        document.getElementById('level').querySelector('span').innerText = this.level;
        document.getElementById('lines').querySelector('span').innerText = this.linesCleared;
        document.getElementById('score').querySelector('span').innerText = this.score;
      },
  
      updateBoard: function () {
        this.canvas.innerHTML = '';
        this.board.forEach((row, y) => {
          row.forEach((cell, x) => {
            if (cell) {
              const el = document.createElement('div');
              el.className = `square type${cell - 1}`;
              el.style.left = `${x * window.pSize}px`;
              el.style.top = `${y * window.pSize}px`;
              this.canvas.appendChild(el);
            }
          });
        });
      },
  
      countdown: function (callback) {
        let count = 3;
        const countdownElement = document.createElement('div');
        countdownElement.id = 'countdown';
        countdownElement.innerText = count;
        this.canvas.appendChild(countdownElement);
  
        const interval = setInterval(() => {
          count--;
          if (count === 0) {
            clearInterval(interval);
            this.canvas.removeChild(countdownElement);
            callback();
          } else {
            countdownElement.innerText = count;
          }
        }, 1000);
      },
  
      play: function () {
        this.timer = setInterval(() => {
          this.movePiece(0, 1);
        }, this.speed);
        const music = document.getElementById('tetris-music');
        music.play();
      },
    };
  
    document.querySelector('#start').addEventListener('click', function () {
      this.style.display = 'none';
      if (!isStart) {
        tetris.init();
      } else {
        tetris.togglePause();
      }
    });
  })();
  