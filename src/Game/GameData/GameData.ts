class GameData 
{
    private static instance: GameData;

    GameOptions : GameOption[];

    PlayData : PlayData[];

    constructor() 
    { 

    }

    public static init(data:Object): GameData 
    {
        if (!GameData.instance) 
            GameData.instance = Object.assign(new GameData(), data);
    
        return GameData.instance;
    }

    public static getInstance(): GameData 
    {
        if (!GameData.instance) 
            throw 'You have to call init first';
    
        return GameData.instance;
    }

    public getOptionName(id:number)
    {
        return GameData.getInstance().GameOptions.find(data => data.id === id).name;
    }
}


class GameOption
{
    id:number;
    name:string;
}

class PlayData
{
    id:number;
    win:number;
    lose:number;
}

export {GameData, GameOption, PlayData}