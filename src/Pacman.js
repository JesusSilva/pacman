const angleToRad = (angle) => (angle * Math.PI) / 180;
const mouthAnimation = (mouthOpen) => {
  return 20 * Math.sin(10 * mouthOpen) + 20;
};
class Pacman {
  constructor(initialPos, color = "yellow", maxSpeed = 10) {
    this.pacmanSize = 10;
    this.mouthOpen = 20;
    this.origin = { x: initialPos.x, y: initialPos.y };
    this.color = color;
    this.maxSpeed = maxSpeed;
    this.speed = { x: maxSpeed, y: 0 };
  }

  update() {
    this.mouthOpen += 0.8;
    let newPosX = this.origin.x + this.speed.x;
    let newPosY = this.origin.y + this.speed.y;

    if (newPosX < 768 && newPosX >= 0) {
      this.origin.x = newPosX;
    }

    if (newPosY < 768 && newPosY >= 0) {
      this.origin.y = newPosY;
    }
  }

  keyboard_event(key) {
    switch (key) {
      case `ArrowRight`:
        this.speed.x = this.maxSpeed;
        this.speed.y = 0;
        break;
      case `ArrowLeft`:
        this.speed.x = -this.maxSpeed;
        this.speed.y = 0;
        break;
      case `ArrowUp`:
        this.speed.y = -this.maxSpeed;
        this.speed.x = 0;
        break;
      case `ArrowDown`:
        this.speed.y = this.maxSpeed;
        this.speed.x = 0;
        break;
    }
  }

  getDirection() {
    let direction;

    if (this.speed.x !== 0 && this.speed.x > 0) {
      direction = 0;
    } else if (this.speed.x !== 0 && this.speed.x < 0) {
      direction = 180;
    } else if (this.speed.y !== 0 && this.speed.y > 0) {
      direction = 90;
    } else if (this.speed.y !== 0 && this.speed.y < 0) {
      direction = 270;
    }

    return direction;
  }

  draw(ctx) {
    ctx.strokeStyle = "black";
    ctx.fillStyle = this.color;
    ctx.lineWidth = 4;
    ctx.beginPath();
    ctx.moveTo(this.origin.x, this.origin.y);
    ctx.arc(
      this.origin.x,
      this.origin.y,
      this.pacmanSize,
      angleToRad(-mouthAnimation(this.mouthOpen) + this.getDirection()),
      angleToRad(mouthAnimation(this.mouthOpen) + this.getDirection()),
      true
    );
    ctx.closePath();
    ctx.stroke();
    ctx.fill();
  }
}
