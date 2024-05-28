const pSize = 20;
const canvasHeight = 400;
const canvasWidth = 200;
const spawnX = 4;
const spawnY = 1;
const shapes = [
  [
    [-1, 1],
    [0, 1],
    [1, 1],
    [0, 0], // T
  ],
  [
    [-1, 0],
    [0, 0],
    [1, 0],
    [2, 0], // L
  ],
  [
    [-1, -1],
    [-1, 0],
    [0, 0],
    [1, 0], // L EL
  ],
  [
    [1, -1],
    [-1, 0],
    [0, 0],
    [1, 0], // R EL
  ],
  [
    [0, -1],
    [1, -1],
    [-1, 0],
    [0, 0], // R ess
  ],
  [
    [-1, -1],
    [0, -1],
    [0, 0],
    [1, 0], // L ess
  ],
  [
    [0, -1],
    [1, -1],
    [0, 0],
    [1, 0], // S
  ],
];

window.pSize = pSize;
window.canvasHeight = canvasHeight;
window.canvasWidth = canvasWidth;
window.spawnX = spawnX;
window.spawnY = spawnY;
window.shapes = shapes;
