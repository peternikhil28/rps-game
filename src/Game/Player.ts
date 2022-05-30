import Utils from "../../NTEngine/Utils";
import { GameData, GameOption } from "./GameData/GameData";


export default class Player{

    score:number;
    bot:boolean;

    result:GameOption;

    constructor(config : {bot : boolean} = null)
    {
        this.score = 0;
        this.bot = config.bot;
    }

    computeResult()
    {
        if(!this.bot)
            throw "Take input from the player";
        
        let gameOptions = GameData.getInstance().GameOptions;

        this.result = gameOptions[Utils.getRandomInt(0,gameOptions.length-1)];
    }

    input(optionName:string)
    {
        this.result = GameData.getInstance().GameOptions.find(data => data.name === optionName);
    }
}