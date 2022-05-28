
import IState from "Engine/StateMachine/IState";
import StateMachine from "Engine/StateMachine/StateMachine";
import ComputerTurn from "./States/ComputerTurn";
import Lose from "./States/Lose";
import PlayerTurn from "./States/PlayerTurn";
import Start from "./States/Start";
import Win from "./States/Win";

export default class Game extends StateMachine{

    playerScore : Number = 0;
    computerScore : Number = 0;

    state : IState;

    startState : Start;
    playerTurnState : PlayerTurn;
    computerTurnState : ComputerTurn;
    winState : Win;
    loseState : Lose;

    constructor()
    {
        super();

        this.loadStates();

        this.state = this.startState;

        console.log("Machine Started")
    }

    loadStates()
    {
        this.startState = new Start(this);
        this.playerTurnState = new PlayerTurn(this);
        this.computerTurnState = new ComputerTurn(this);
        this.winState = new Win(this);
        this.loseState = new Lose(this);
    }

    setState(state : IState)
    {
        this.state = state;
    }
}