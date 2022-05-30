import App from "NTEngine/App";
import SceneManager from "NTEngine/SceneManager";
import * as PIXI from "pixi.js";
import Game from "./Game/Game";
import {GameData} from "./Game/GameData/GameData";


PIXI.Loader.shared.add("GameData", "res/GameData.json");
PIXI.Loader.shared.add("res/Game/Game_Layout.json");
PIXI.Loader.shared.add("res/Game/Game_00.json");

PIXI.Loader.shared.load((loader, resources) => {

    GameData.init(resources['GameData'].data);

    App.veiwport.width = 1920;
    App.veiwport.height = 1080;

    App.load();

    let game:Game = new Game();
    SceneManager.loadScene(game);
});
