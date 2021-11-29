let pacmanMap = `
WWWWWWWWWWWWWWWWWWWWWWWWWWWW
W............WW............W
W.WWWW.WWWWW.WW.WWWWW.WWWW.W
W*WWWW.WWWWW.WW.WWWWW.WWWW*W
W.WWWW.WWWWW.WW.WWWWW.WWWW.W
W..........................W
W.WWWW.WW.WWWWWWWW.WW.WWWW.W
W.WWWW.WW.WWWWWWWW.WW.WWWW.W
W......WW....WW....WW......W
WWWWWW.WWWWW.WW.WWWWW.WWWWWW
WWWWWW.WWWWW.WW.WWWWW.WWWWWW
WWWWWW.WW..........WW.WWWWWW
WWWWWW.WW.WWW--WWW.WW.WWWWWW
WWWWWW.WW.WooooooW.WW.WWWWWW
..........WooooooW..........
WWWWWW.WW.WooooooW.WW.WWWWWW
WWWWWW.WW.WWWWWWWW.WW.WWWWWW
WWWWWW.WW..........WW.WWWWWW
WWWWWW.WW.WWWWWWWW.WW.WWWWWW
WWWWWW.WW.WWWWWWWW.WW.WWWWWW
W............WW............W
W.WWWW.WWWWW.WW.WWWWW.WWWW.W
W*WWWW.WWWWW.WW.WWWWW.WWWW*W
W...WW................WW...W
WWW.WW.WW.WWWWWWWW.WW.WW.WWW
WWW.WW.WW.WWWWWWWW.WW.WW.WWW
W......WW....WW....WW......W
W.WWWWWWWWWW.WW.WWWWWWWWWW.W
W.WWWWWWWWWW.WW.WWWWWWWWWW.W
W..........................W
WWWWWWWWWWWWWWWWWWWWWWWWWWWW
`;

class Map {
  constructor(ctx) {
    this.canvasWidth = ctx.canvas.width;
    this.canvasHeight = ctx.canvas.height;
    this.matrix = this.prepareMatrix();
    this.partOfMapHeight = this.canvasHeight / this.matrix.length;
    this.partOfMapWidth = this.canvasWidth / this.matrix[0]?.length;

    console.log("partOfMapHeight: " + this.partOfMapHeight);
    console.log("partOfMapWidth: " + this.partOfMapWidth);
  }

  prepareMatrix() {
    const matrix = [];
    let array = [];

    Array.from(pacmanMap).forEach((e, i) => {
      if (!(e === "\n")) {
        array = [...array, e];
      } else if (e === "\n") {
        if (array.length) matrix.push(array);
        array = [];
      }
    });

    return matrix;
  }

  keyboard_event() {}
  update() {}

  draw(ctx) {
    this.matrix.forEach((row, indexRow) => {
      row.forEach((col, indexCol) => {
        let x = indexCol * this.partOfMapWidth;
        let y = indexRow * this.partOfMapHeight;

        let formClass;

        switch (col) {
          case "W":
            formClass = new BuilderMap({
              ctx,
              x,
              y,
              width: this.partOfMapWidth,
              height: this.partOfMapHeight,
              form: "rect",
              color: "blue",
            });
            formClass.draw();

            break;
          case ".":
            formClass = new BuilderMap({
              ctx,
              x,
              y,
              width: this.partOfMapWidth,
              height: this.partOfMapHeight,
              form: "arc",
              color: "white",
            });
            formClass.draw();
            break;
          case "*":
            formClass = new BuilderMap({
              ctx,
              x,
              y,
              width: this.partOfMapWidth,
              height: this.partOfMapHeight,
              form: "arc",
              color: "red",
            });
            formClass.draw();
            break;
          case "-":
            formClass = new BuilderMap({
              ctx,
              x,
              y,
              width: this.partOfMapWidth,
              height: this.partOfMapHeight,
              form: "rect",
              color: "black",
            });
            formClass.draw();
            break;
          case "o":
            formClass = new BuilderMap({
              ctx,
              x,
              y,
              width: this.partOfMapWidth,
              height: this.partOfMapHeight,
              form: "rect",
              color: "black",
            });
            formClass.draw();
            break;
          default:
            break;
        }
      });
    });
  }
}
