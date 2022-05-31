import GameStateMachine from '../GameStateMachine';
import IGameState from '../IGameState';

export default class ComputerTurn implements IGameState
{
    gameStateMachine: GameStateMachine;

    constructor(game:GameStateMachine)
    {
        this.gameStateMachine = game;
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
        this.gameStateMachine.game.computer.generateResult();

        console.log("Computer Result : ",  this.gameStateMachine.game.computer.result);

        this.gameStateMachine.setState(this.gameStateMachine.resultState);
    }

    updateUI()
    {
        this.gameStateMachine.game.view.updateComputerResult(this.gameStateMachine.game.computer.result.name);
    }

    update: () => void;
}