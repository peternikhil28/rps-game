import { ObjectData } from "NTEngine/LayoutSystem/LayoutData";
import LayoutImporter from "NTEngine/LayoutSystem/LayoutImporter";
import Utils from "NTEngine/Utils";
import { GameData } from "./GameData/GameData";

export default class GameLayout extends LayoutImporter{

    _txtPlayerScore:PIXI.Text;
    _txtComputerScore:PIXI.Text;

    _playerResult:PIXI.Sprite;
    _computerResult:PIXI.Sprite;

    createCustomObject(objectData: ObjectData): any 
    {
        switch(objectData.type)
        {
            case "Result":
                let gameObject = new PIXI.Sprite();
                gameObject.name = objectData.name;
                gameObject.position.set(objectData.x-objectData.w/2, objectData.y-objectData.h/2);
                return gameObject;
        }
    }

    onObjectCreated(object: any, objectData: ObjectData): void 
    {
        switch(objectData.name)
        {
            case "txtScore1":
                this._txtPlayerScore = object;
                break;

            case "txtScore2":
                this._txtComputerScore = object;
                break;

            case "Player":
                this._playerResult = object;
                break;
            
            case "Computer":
                this._computerResult = object;
                break;
        }
    }

    onButtonClicked(callback: any): void 
    {
        
    }

    onLayoutComplete(): void {
        super.onLayoutComplete();

        this.updatePlayerScore(0);
        this.updateComputerScore(0);
    }

    updatePlayerScore(score:number)
    {
        this._txtPlayerScore.text = "Score : " + score;
    }

    updateComputerScore(score:number)
    {
        this._txtComputerScore.text = "Score : " + score;
    }

    updatePlayerResult(id:number)
    {
        this._playerResult.texture = Utils.getTexture(this.assetFolder, GameData.getInstance().getOptionName(id));
    }

    updateComputerResult(id:number)
    {
        this._computerResult.texture = Utils.getTexture(this.assetFolder, GameData.getInstance().getOptionName(id));
    }
}