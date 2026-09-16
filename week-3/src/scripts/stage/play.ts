import { type Application, Stage, ColorLayer } from "melonjs";
import PlayerEntity from "../renderables/player";

class PlayScreen extends Stage {
    onResetEvent(app: Application) {
        // Add the melonJS game background.
        app.world.addChild(
            new ColorLayer("background", "#000000")
        );

        // Add the melonJS version of Pacman.
        app.world.addChild(
            new PlayerEntity()
        );
    }
}

export default PlayScreen;
