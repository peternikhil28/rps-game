import IState from 'NTEngine/StateMachine/IState';
import { GameOption } from '../../GameData/GameData';
import GameStateMachine from '../GameStateMachine';

export default class PlayerTurn implements IState
{
    gameStateMachine: GameStateMachine;

    constructor(game:GameStateMachine)
    {
        this.gameStateMachine = game;
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
        this.gameStateMachine.game.player.result = result; 
    
        console.log("Player Result : ",  this.gameStateMachine.game.player.result);

        this.gameStateMachine.setState(this.gameStateMachine.computerTurnState);
    }

    updateUI()
    {
        this.gameStateMachine.game.view.updatePlayerResult(this.gameStateMachine.game.player.result.name);
    }

    update: () => void; 
}