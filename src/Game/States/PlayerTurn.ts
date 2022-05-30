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
       // this.input();
    }

    input(result:GameOption)
    {
        this.game.player.computeResult();

        console.log("Player Result : ",  this.game.player.result);

        this.game.setState(this.game.computerTurnState);
    }

    update: () => void; 
}