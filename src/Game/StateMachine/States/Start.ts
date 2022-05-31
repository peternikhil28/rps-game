import GameStateMachine from "../GameStateMachine";
import IGameState from "../IGameState";

export default class Start implements IGameState
{
    gameStateMachine: GameStateMachine;

    constructor(game:GameStateMachine)
    {
        this.gameStateMachine = game;
    }
  
   
    start()
    {
        console.log("\n\n\n******** Game Started ********");

        this.updateScore();

        this.gameStateMachine.setState(this.gameStateMachine.playerTurnState);
    }

    end()
    {

    }

    update: () => void;

    updateScore()
    {
        this.gameStateMachine.game.view.updatePlayerScore(this.gameStateMachine.game.player.score);
        this.gameStateMachine.game.view.updateComputerScore(this.gameStateMachine.game.computer.score);
    }
}