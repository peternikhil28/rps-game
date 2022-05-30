import IState from 'NTEngine/StateMachine/IState';
import Game from '../Game';

export default class ComputerTurn implements IState
{
    game:Game;
    
    constructor(game:Game)
    {
        this.game = game;
    }

    start()
    {
        this.computeResult();
    }

    computeResult()
    {
        this.game.computer.computeResult();

        console.log("Computer Result : ",  this.game.computer.result);

        this.game.setState(this.game.resultState);
    }

    update: () => void;
}