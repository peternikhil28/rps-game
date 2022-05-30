
import IState from "../../NTEngine/StateMachine/IState";
import StateMachine from "../../NTEngine/StateMachine/StateMachine";
import Player from "./Player";
import ComputerTurn from "./States/ComputerTurn";
import Result from "./States/Result";
import PlayerTurn from "./States/PlayerTurn";
import Start from "./States/Start";
import Scene from "NTEngine/Scene";
import GameLayout from "./GameLayout";

export default class Game extends Scene
{
    view : GameLayout;

    player : Player;
    computer : Player;

    stateMachine : StateMachine;

    startState : Start;
    playerTurnState : PlayerTurn;
    computerTurnState : ComputerTurn;
    resultState : Result;

    constructor()
    {
        super();

        this.stateMachine = new StateMachine();

        this.loadView();

        this.loadPlayers();

        this.loadStates();

        this.setState(this.startState);
    }

    loadView()
    {
        this.view = new GameLayout(this);
        this.view.load("res/Game/", "Game");
    }

    loadPlayers()
    {
        this.player = new Player({bot:true});
        this.computer = new Player({bot:true});
    }

    loadStates()
    {
        this.startState = new Start(this);
        this.playerTurnState = new PlayerTurn(this);
        this.computerTurnState = new ComputerTurn(this);
        this.resultState = new Result(this);
    }

    setState(state : IState)
    {
        this.stateMachine.setState(state);
    }

   
}

