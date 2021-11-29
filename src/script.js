window.onload = () => {
  var canvas = document.getElementById("canvas");
  var ctx = canvas.getContext("2d");

  // Pintamos Pacman
  let actors = [new Map(ctx), new Pacman({ x: 200, y: 100 }, "yellow", 10)];

  // GAME LOOP --> Bucle de renderizado y actualización
  setInterval(() => {
    actors.forEach((e) => e.update());
    ctx.clearRect(0, 0, 768, 768);
    actors.forEach((e) => {
      e.draw(ctx);
    });
  }, 1000 / 60);

  document.body.addEventListener("keydown", (e) => {
    actors.forEach((actor) => {
      actor.keyboard_event(e.key);
    });
  });
};
