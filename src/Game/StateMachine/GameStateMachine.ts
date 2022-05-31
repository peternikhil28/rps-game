import StateMachine from "NTEngine/StateMachine/StateMachine";
import Game from "../Game";
import ComputerTurn from "./States/ComputerTurn";
import PlayerTurn from "./States/PlayerTurn";
import Result from "./States/Result";
import Start from "./States/Start";

export default class GameStateMachine extends StateMachine
{
    game : Game;

    startState : Start;
    playerTurnState : PlayerTurn;
    computerTurnState : ComputerTurn;
    resultState : Result;

    constructor(game:Game)
    {
        super();

        this.game = game;

        this.loadStates();
    }

    loadStates()
    {
        this.startState = new Start(this);
        this.playerTurnState = new PlayerTurn(this);
        this.computerTurnState = new ComputerTurn(this);
        this.resultState = new Result(this);
    }

    start()
    {
        this.setState(this.startState);
    }
}