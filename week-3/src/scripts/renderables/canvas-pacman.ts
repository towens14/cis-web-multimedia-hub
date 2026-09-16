import {
    movePacman,
    pacmanState,
    type Direction,
} from "../../pacman-state";

let facing: Direction = "right";

function drawPacman(
    context: CanvasRenderingContext2D,
    canvas: HTMLCanvasElement
) {
    context.clearRect(0, 0, canvas.width, canvas.height);

    // Draw a simple maze-style grid.
    context.strokeStyle = "#15206b";
    context.lineWidth = 1;

    for (let x = 0; x <= canvas.width; x += 40) {
        context.beginPath();
        context.moveTo(x, 0);
        context.lineTo(x, canvas.height);
        context.stroke();
    }

    for (let y = 0; y <= canvas.height; y += 40) {
        context.beginPath();
        context.moveTo(0, y);
        context.lineTo(canvas.width, y);
        context.stroke();
    }

    const directionAngles: Record<Direction, number> = {
        right: 0,
        down: Math.PI / 2,
        left: Math.PI,
        up: -Math.PI / 2,
    };

    const angle = directionAngles[facing];
    const mouth = Math.PI / 5;

    context.fillStyle = "#ffeb3b";
    context.beginPath();
    context.moveTo(pacmanState.x, pacmanState.y);
    context.arc(
        pacmanState.x,
        pacmanState.y,
        pacmanState.radius,
        angle + mouth,
        angle - mouth + Math.PI * 2
    );
    context.closePath();
    context.fill();
}

function updateCoordinates(element: HTMLElement) {
    element.textContent =
        `Pacman Position — X: ${pacmanState.x}, Y: ${pacmanState.y}`;
}

export function initializeCanvasPacman() {
    const canvas = document.querySelector<HTMLCanvasElement>(
        "#pacman-canvas"
    );

    const coordinates = document.querySelector<HTMLElement>(
        "#coordinates"
    );

    if (!canvas || !coordinates) {
        throw new Error("Pacman canvas elements were not found.");
    }

    const context = canvas.getContext("2d");

    if (!context) {
        throw new Error("The browser could not create a 2D canvas context.");
    }

    drawPacman(context, canvas);
    updateCoordinates(coordinates);

    window.addEventListener("keydown", (event) => {
        const keyDirections: Record<string, Direction> = {
            ArrowLeft: "left",
            ArrowRight: "right",
            ArrowUp: "up",
            ArrowDown: "down",
        };

        const direction = keyDirections[event.key];

        if (!direction) {
            return;
        }

        event.preventDefault();
        facing = direction;
        movePacman(direction);
        drawPacman(context, canvas);
        updateCoordinates(coordinates);
    });
}