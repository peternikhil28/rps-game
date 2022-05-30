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

    end()
    {
        this.updateUI();
    }

    computeResult()
    {
        this.game.computer.computeResult();

        console.log("Computer Result : ",  this.game.computer.result);

        this.game.setState(this.game.resultState);
    }

    updateUI()
    {
        this.game.view.updateComputerResult(this.game.computer.result.name);
    }

    update: () => void;
}