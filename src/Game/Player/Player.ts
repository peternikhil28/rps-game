import Utils from "NTEngine/Utils";
import { GameData, GameOption } from "../GameData/GameData";

class Score
{
    score:number;

    constructor()
    {
        this.score = 0;
    }
}

type GConstructor<T = {}> = new (...args: any[]) => T;
type ScoreBase = GConstructor<Score>;

function PlayerEvaluator<TBase extends ScoreBase>(Base: TBase) {
  return class PlayerController extends Base {
   
    result:GameOption;

    input(optionName:string)
    {
       this.evaluate(optionName);
    }

    evaluate(optionName:string)
    {
        this.result = GameData.getInstance().GameOptions.find(data => data.name === optionName);
    }
  };
}

function BotEvaluator<TBase extends ScoreBase>(Base: TBase) {
    return class PlayerController extends Base {
     
        result:GameOption;
      
        evaluate()
        { 
            let gameOptions = GameData.getInstance().GameOptions;

            this.result = gameOptions[Utils.getRandomInt(0,gameOptions.length-1)];
        }
    };
  }

  class Player extends PlayerEvaluator(Score){}
  class Computer extends BotEvaluator(Score){}

  export {Player, Computer};