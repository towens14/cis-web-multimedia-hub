export type Direction = "left" | "right" | "up" | "down";

export const pacmanState = {
    x: 60,
    y: 160,
    radius: 18,
    speed: 10,
};

export function movePacman(direction: Direction) {
    const { radius, speed } = pacmanState;
    const width = 500;
    const height = 320;

    if (direction === "left") {
        pacmanState.x -= speed;
    }

    if (direction === "right") {
        pacmanState.x += speed;
    }

    if (direction === "up") {
        pacmanState.y -= speed;
    }

    if (direction === "down") {
        pacmanState.y += speed;
    }

    pacmanState.x = Math.max(
        radius,
        Math.min(width - radius, pacmanState.x)
    );

    pacmanState.y = Math.max(
        radius,
        Math.min(height - radius, pacmanState.y)
    );
}