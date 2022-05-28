import IState from 'Engine/StateMachine/IState';
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
        this.updateScore();

        this.game.setState(this.game.playerTurnState);
    }

    end: () => void;
    update: () => void;

    updateScore()
    {

    }
}