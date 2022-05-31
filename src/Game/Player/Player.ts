import Utils from "NTEngine/Utils";
import { GameData, GameOption } from "../GameData/GameData";

class Player
{
    score:number;

    result:GameOption;

    constructor()
    {
        this.score = 0;
    }

    setResult(optionName:string)
    {
        this.result = GameData.getInstance().GameOptions.find(data => data.name === optionName);
    }
}

type GConstructor<T = {}> = new (...args: any[]) => T;
type PlayerBase = GConstructor<Player>;

function PlayerInput<TBase extends PlayerBase>(Base: TBase) {
  return class PlayerController extends Base {
   
    input(optionName:string)
    {
       this.setResult(optionName);
    }    
  };
}

function GenerateResult<TBase extends PlayerBase>(Base: TBase) {
    return class PlayerController extends Base {
     
        generateResult()
        { 
            let gameOptions = GameData.getInstance().GameOptions;

            this.setResult(gameOptions[Utils.getRandomInt(0,gameOptions.length-1)].name);
        }
    };
  }

  class MainPlayer extends PlayerInput(Player){}
  class ComputerPlayer extends GenerateResult(Player){}

  export {MainPlayer, ComputerPlayer};