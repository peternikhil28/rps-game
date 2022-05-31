import { ObjectData } from "NTEngine/LayoutSystem/LayoutData";
import LayoutImporter from "NTEngine/LayoutSystem/LayoutImporter";
import Utils from "NTEngine/Utils";
import { GameData } from "./GameData/GameData";

export default class GameLayout extends LayoutImporter{

    private _txtPlayerScore:PIXI.Text;
    private _txtComputerScore:PIXI.Text;
    private _txtWin:PIXI.Text;

    private _playerResult:PIXI.Sprite;
    private _computerResult:PIXI.Sprite;

    createCustomObject(objectData: ObjectData): any 
    {
        switch(objectData.type)
        {
            case "Result":
                let gameObject = new PIXI.Sprite();
                gameObject.anchor.set(0.5, 0.5);
                gameObject.name = objectData.name;
                gameObject.position.set(objectData.x, objectData.y);
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

            case "txtWin":
                this._txtWin = object;
                break;

            case "Player":
                this._playerResult = object;
                break;
            
            case "Computer":
                this._computerResult = object;
                break;
        }
    }

    onButtonClicked(target:any)
    {
        switch(target.name)
        {
            case "btnRock":
                this.scene.stateMachine.playerTurnState.setResult(GameData.getInstance().GameOptions.find(data => data.name === "Rock"));
                break;

            case "btnPaper":
                this.scene.stateMachine.playerTurnState.setResult(GameData.getInstance().GameOptions.find(data => data.name === "Paper"));
                break;

            case "btnScissor":
                this.scene.stateMachine.playerTurnState.setResult(GameData.getInstance().GameOptions.find(data => data.name === "Scissor"));
                break;
        }
    }

    onLayoutComplete(): void {
        super.onLayoutComplete();

        this.updatePlayerScore(0);
        this.updateComputerScore(0);
    }

    set txtWin(text:string)
    {
        this._txtWin.text = text;
    }

    updatePlayerScore(score:number)
    {
        this._txtPlayerScore.text = "Player Score : " + score;
    }

    updateComputerScore(score:number)
    {
        this._txtComputerScore.text = "Computer Score : " + score;
    }

    updatePlayerResult(name:string)
    {
        this._playerResult.texture = Utils.getTexture(this.assetFolder + this.assetName, name);
    }

    updateComputerResult(name:string)
    {
        this._computerResult.texture = Utils.getTexture(this.assetFolder + this.assetName, name);
    }
}