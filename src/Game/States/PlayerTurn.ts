import IState from 'NTEngine/StateMachine/IState';
import Game from '../Game';
import { GameOption } from '../GameData/GameData';

export default class PlayerTurn implements IState
{
    game:Game;
    
    constructor(game:Game)
    {
        this.game = game;
    }

    start()
    {
    
    }

    end()
    {
        this.updateUI();
    }

    setResult(result:GameOption)
    {
        this.game.player.result = result; 
    
        console.log("Player Result : ",  this.game.player.result);

        this.game.setState(this.game.computerTurnState);
    }

    updateUI()
    {
        this.game.view.updatePlayerResult(this.game.player.result.name);
    }

    update: () => void; 
}