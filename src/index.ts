import * as PIXI from "pixi.js";
import Game from "./Game/Game";
import GameData from "./Game/GameData";


PIXI.Loader.shared.add("GameData", "res/GameData.json");

PIXI.Loader.shared.load((loader, resources) => {

    GameData.init(resources['GameData'].data);

    console.log(GameData.getInstance().GameOptions);
    console.log(GameData.getInstance().PlayData);

    let startGame = new Game();
});
