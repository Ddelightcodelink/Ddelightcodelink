class Piece {
    constructor(type, x, y) {
      this.type = type;
      this.x = x;
      this.y = y;
      this.blocks = window.shapes[type];
    }
  
    draw(canvas) {
      this.blocks.forEach(block => {
        const el = document.createElement('div');
        el.className = `square type${this.type}`;
        el.style.left = `${(block[0] + this.x) * window.pSize}px`;
        el.style.top = `${(block[1] + this.y) * window.pSize}px`;
        canvas.appendChild(el);
      });
    }
  
    move(dx, dy) {
      this.x += dx;
      this.y += dy;
    }
  
    rotate() {
      this.blocks = this.blocks.map(([x, y]) => [-y, x]);
    }
  }
  
  window.Piece = Piece;
  