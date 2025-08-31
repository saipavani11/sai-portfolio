import React, { useEffect, useRef, useState } from "react";

const COLS = 15;
const ROWS = 15;
const CELL = 28;

const palette = {
  bg1: "#F7C9A6",
  bg2: "#F9DFA4",
  snakeHead: "#A7B94A",
  snakeBody: "#6A8B2F",
  food: "#F2784B",
  scoreText: "#83618c",
  startText: "#83615c",
  boardBg: "#fbdeb6",
};

function drawSushi(ctx, x, y, size) {
  const px = size / 6;
  ctx.fillStyle = "#fff7e6"; // rice
  ctx.fillRect(x, y + px * 1, px * 6, px * 4);
  ctx.fillStyle = "#3b4a2f"; // seaweed
  ctx.fillRect(x, y + px * 3.5, px * 6, px * 0.8);
  ctx.fillStyle = "#f6a06a"; // salmon
  ctx.fillRect(x + px * 0.5, y + px * 0.2, px * 5, px * 2);
  ctx.fillStyle = "#a7d07a"; // garnish
  ctx.fillRect(x + px * 4, y + px * 0.3, px * 0.9, px * 0.9);
}

export default function SnakeGame() {
  const canvasRef = useRef(null);
  const [snake, setSnake] = useState([{ x: 7, y: 7 }]);
  const [food, setFood] = useState({ x: 5, y: 5 });
  const [dir, setDir] = useState(null);
  const [score, setScore] = useState(0);
  const [started, setStarted] = useState(false);
  const [gameOver, setGameOver] = useState(false);

  const randomPos = (currentSnake) => {
    const available = [];
    for (let r = 0; r < ROWS; r++) {
      for (let c = 0; c < COLS; c++) {
        if (!currentSnake.some((s) => s.x === c && s.y === r)) {
          available.push({ x: c, y: r });
        }
      }
    }
    return available[Math.floor(Math.random() * available.length)];
  };

  useEffect(() => {
    setFood(randomPos(snake));
  }, []);

  useEffect(() => {
    const onKey = (e) => {
      const key = e.key;
      if (["ArrowUp", "ArrowDown", "ArrowLeft", "ArrowRight"].includes(key)) {
        e.preventDefault();
        if (!started) setStarted(true);

        setDir((prev) => {
          if (!prev) {
            if (key === "ArrowUp") return "UP";
            if (key === "ArrowDown") return "DOWN";
            if (key === "ArrowLeft") return "LEFT";
            if (key === "ArrowRight") return "RIGHT";
          } else {
            if (key === "ArrowUp" && prev !== "DOWN") return "UP";
            if (key === "ArrowDown" && prev !== "UP") return "DOWN";
            if (key === "ArrowLeft" && prev !== "RIGHT") return "LEFT";
            if (key === "ArrowRight" && prev !== "LEFT") return "RIGHT";
          }
          return prev;
        });
      }
    };

    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [started]);

  useEffect(() => {
    if (!started || gameOver) return;
    const tick = () => {
      setSnake((prev) => {
        const head = { ...prev[0] };
        if (dir === "UP") head.y -= 1;
        else if (dir === "DOWN") head.y += 1;
        else if (dir === "LEFT") head.x -= 1;
        else if (dir === "RIGHT") head.x += 1;

        if (head.x < 0 || head.x >= COLS || head.y < 0 || head.y >= ROWS) {
          setGameOver(true);
          return prev;
        }
        if (prev.some((s) => s.x === head.x && s.y === head.y)) {
          setGameOver(true);
          return prev;
        }

        const newSnake = [head, ...prev];
        if (head.x === food.x && head.y === food.y) {
          setScore((s) => s + 1);
          setFood(randomPos(newSnake));
        } else {
          newSnake.pop();
        }
        return newSnake;
      });
    };
    const id = setInterval(tick, 140);
    return () => clearInterval(id);
  }, [started, dir, food, gameOver]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    canvas.style.imageRendering = "pixelated";

    // background
    for (let y = 0; y < ROWS; y++) {
      for (let x = 0; x < COLS; x++) {
        ctx.fillStyle = (x + y) % 2 === 0 ? "#f7e6d8" : "#f9ebd2";
        ctx.fillRect(x * CELL, y * CELL, CELL, CELL);
      }
    }

    // sushi (food)
    drawSushi(ctx, food.x * CELL + CELL * 0.1, food.y * CELL + CELL * 0.1, CELL * 0.8);

    // direction vector for eyes
    let dx = 0, dy = 0;
    if (dir === "UP") dy = -1;
    if (dir === "DOWN") dy = 1;
    if (dir === "LEFT") dx = -1;
    if (dir === "RIGHT") dx = 1;

    // snake
    for (let i = snake.length - 1; i >= 0; i--) {
      const s = snake[i];
      ctx.fillStyle = i === 0 ? palette.snakeHead : palette.snakeBody;
      ctx.fillRect(s.x * CELL + 2, s.y * CELL + 2, CELL - 4, CELL - 4);

      // head eyes
      if (i === 0) {
        ctx.fillStyle = "#fff";
        const eyeSize = CELL / 4;
        if (dx > 0) { // right
          ctx.fillRect(s.x * CELL + CELL * 0.6, s.y * CELL + CELL * 0.2, eyeSize, eyeSize);
          ctx.fillRect(s.x * CELL + CELL * 0.6, s.y * CELL + CELL * 0.6, eyeSize, eyeSize);
        } else if (dx < 0) { // left
          ctx.fillRect(s.x * CELL + CELL * 0.2, s.y * CELL + CELL * 0.2, eyeSize, eyeSize);
          ctx.fillRect(s.x * CELL + CELL * 0.2, s.y * CELL + CELL * 0.6, eyeSize, eyeSize);
        } else if (dy > 0) { // down
          ctx.fillRect(s.x * CELL + CELL * 0.2, s.y * CELL + CELL * 0.6, eyeSize, eyeSize);
          ctx.fillRect(s.x * CELL + CELL * 0.6, s.y * CELL + CELL * 0.6, eyeSize, eyeSize);
        } else if (dy < 0) { // up
          ctx.fillRect(s.x * CELL + CELL * 0.2, s.y * CELL + CELL * 0.2, eyeSize, eyeSize);
          ctx.fillRect(s.x * CELL + CELL * 0.6, s.y * CELL + CELL * 0.2, eyeSize, eyeSize);
        }
      }
    }

    // start text
    if (!started && !gameOver) {
      ctx.fillStyle = palette.startText;
      ctx.font = `${Math.floor(CELL * 0.45)}px 'Press Start 2P', monospace`;
      ctx.textAlign = "center";
      ctx.fillText("▶ Press arrows to start", (COLS * CELL) / 2, (ROWS * CELL) / 2);
    }
  }, [snake, food, started, gameOver, dir]);

  const onRestart = () => {
    setSnake([{ x: 7, y: 7 }]);
    setFood(randomPos([{ x: 7, y: 7 }]));
    setDir(null);
    setScore(0);
    setStarted(false);
    setGameOver(false);
  };

  return (
    <div className="w-full flex flex-col items-center">
      <div
        className="mb-3 font-mono"
        style={{
          color: palette.scoreText,
          fontFamily: "'Press Start 2P', monospace",
          fontSize: 14,
        }}
      >
        Score: {score}
      </div>

      <div
        style={{
          padding: 8,
          borderRadius: 10,
          background: "#e0c2d4", // softer warm bg instead of white
          boxShadow: "0 8px 20px rgba(0,0,0,0.12)",
        }}
      >
        <canvas
          ref={canvasRef}
          width={COLS * CELL}
          height={ROWS * CELL}
          style={{
            display: "block",
            borderRadius: 8,
            boxShadow: "inset 0 0 0 2px rgba(0,0,0,0.06)",
            width: COLS * CELL,
            height: ROWS * CELL,
          }}
        />
      </div>

      {gameOver && (
        <div className="mt-3 flex flex-col items-center">
          <div style={{ color: "#83618c", fontFamily: "'Press Start 2P', monospace", marginBottom: 6 }}>
            Game Over
          </div>
          <button
            onClick={onRestart}
            className="px-4 py-2 rounded-md"
            style={{
              background: "#6a8b2f",
              color: "#fbd3b6",
              fontFamily: "'Press Start 2P', monospace",
              boxShadow: "0 6px 14px rgba(0,0,0,0.12)",
            }}
          >
            Restart
          </button>
        </div>
      )}
    </div>
  );
}
