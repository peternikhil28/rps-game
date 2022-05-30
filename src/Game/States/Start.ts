import IState from "NTEngine/StateMachine/IState";
import Game from "../Game";

export default class Start implements IState
{
    game:Game;
    
    constructor(game:Game)
    {
        this.game = game;
    }
   
    start()
    {
        console.log("\n\n\n******** Game Started ********");

        this.updateScore();

        this.game.setState(this.game.playerTurnState);
    }

    end()
    {

    }

    update: () => void;

    updateScore()
    {
        this.game.view.updatePlayerScore(this.game.player.score);
        this.game.view.updateComputerScore(this.game.computer.score);
    }
}