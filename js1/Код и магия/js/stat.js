window.renderStatistics = function (ctx, names, times) {
  const CLOUD_X = 100;
  const CLOUD_Y = 10;
  const CLOUD_WIDTH = 420;
  const CLOUD_HEIGHT = 270;
  const SHADOW_OFFSET = 10;

  const TEXT_GAP = 20;
  const BAR_WIDTH = 40;
  const BAR_MAX_HEIGHT = 150;
  const BAR_GAP = 50;
  const FONT_GAP = 16;
  const TEXT_HEIGHT = 20;
  const START_X = CLOUD_X + 40;
  const START_Y = CLOUD_Y + 80;

  // Функція для малювання хмари
  function drawCloud(x, y, color) {
    ctx.fillStyle = color;
    ctx.fillRect(x, y, CLOUD_WIDTH, CLOUD_HEIGHT);
  }

  drawCloud(
    CLOUD_X + SHADOW_OFFSET,
    CLOUD_Y + SHADOW_OFFSET,
    "rgba(0, 0, 0, 0.7)"
  );

  drawCloud(CLOUD_X, CLOUD_Y, "#fff");

  // ctx.fillRect(100, 10, 420, 270);
  // // ctx.beginPath();
  // // ctx.moveTo(10, 10);
  // // ctx.lineTo(520, 10);
  // // ctx.lineTo(20, 30);
  // // ctx.closePath();
  // // ctx.stroke();
  // ctx.fillStyle = "rgba(255, 255, 255, 1)";

  // ctx.fillRect(95, 5, 420, 270);
  // ctx.fillStyle = "rgba(7, 7, 7, 0.2)";

  ctx.fillStyle = "black";
  ctx.font = "16px PT Mono";
  ctx.textBaseline = "hanging";
  ctx.fillText("Ура, вы победили!", CLOUD_X + 20, CLOUD_Y + 20);
  ctx.fillText("Список результатов:", CLOUD_X + 20, CLOUD_Y + 40);

  const maxTime = Math.max(...times);

  for (let i = 0; i < names.length; i++) {
    const name = names[i];
    const time = times[i];
    const barHeight = (BAR_MAX_HEIGHT * time) / maxTime;
    const barX = START_X + i * (BAR_WIDTH + BAR_GAP);
    const barY = START_Y + BAR_MAX_HEIGHT - barHeight;

    if (name === "Вы") {
      ctx.fillStyle = "rgba(255, 0, 0, 1)";
    } else {
      const saturation = Math.floor(Math.random() * 100);
      ctx.fillStyle = "hls(240, ${saturation}%, 50%)";
    }

    ctx.fillRect(barX, barY, BAR_WIDTH, barHeight);

    ctx.fillStyle = "#000";
    ctx.fillText(Math.round(time), barX, barY - TEXT_GAP / 2);

    ctx.fillText(name, barX, START_Y + BAR_MAX_HEIGHT + TEXT_HEIGHT / 2);
  }
};
