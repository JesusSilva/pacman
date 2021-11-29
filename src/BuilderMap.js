class BuilderMap {
  constructor(data) {
    Object.assign(this, data);
    console.log(this);
  }

  draw() {
    switch (this.form) {
      case "rect":
        this.ctx.beginPath();
        this.ctx.lineWidth = 4;
        this.ctx.strokeStyle = this.color;
        this.ctx.fillStyle = this.color;
        this.ctx.rect(this.x, this.y, this.width, this.height);
        this.ctx.fillRect(this.x, this.y, this.width, this.height);
        this.ctx.stroke();
        break;
      case "arc":
        this.ctx.strokeStyle = this.color;
        this.ctx.fillStyle = this.color;
        this.ctx.beginPath();
        this.ctx.arc(
          this.x + this.width / 2,
          this.y + this.height / 2,
          3,
          0,
          2 * Math.PI
        );
        this.ctx.closePath();
        this.ctx.stroke();
        this.ctx.fill();
        break;
      default:
        break;
    }
  }
}
