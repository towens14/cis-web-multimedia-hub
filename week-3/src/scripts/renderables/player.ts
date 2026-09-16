import { Sprite, loader } from "melonjs";
import { pacmanState } from "../../pacman-state";

class PlayerEntity extends Sprite {
    constructor() {
        super(pacmanState.x, pacmanState.y, {
            image: loader.getImage("pacman"),
        });
    }

    override update(dt: number) {
        // Keep the melonJS Pacman synchronized with the HTML5 canvas.
        this.pos.x = pacmanState.x;
        this.pos.y = pacmanState.y;

        super.update(dt);

        // Returning true tells melonJS to redraw this object.
        return true;
    }

    override onCollision() {
        return true;
    }
}

export default PlayerEntity;