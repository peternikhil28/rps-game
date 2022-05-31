
import IState from "../../NTEngine/StateMachine/IState";
import StateMachine from "../../NTEngine/StateMachine/StateMachine";
import ComputerTurn from "./StateMachine/States/ComputerTurn";
import Result from "./StateMachine/States/Result";
import PlayerTurn from "./StateMachine/States/PlayerTurn";
import Start from "./StateMachine/States/Start";
import Scene from "NTEngine/Scene";
import GameLayout from "./GameLayout";
import GameStateMachine from "./StateMachine/GameStateMachine";
import { ComputerPlayer, MainPlayer } from "./Player/Player";


export default class Game extends Scene
{
    view : GameLayout;

    player : MainPlayer;
    computer : ComputerPlayer;

    stateMachine : GameStateMachine;

    constructor()
    {
        super();

        this.stateMachine = new GameStateMachine(this);

        this.loadView();

        this.loadPlayers();
    }

    loadView()
    {
        this.view = new GameLayout(this);
        this.view.load("res/Game/", "Game");
    }

    loadPlayers()
    {
        this.player = new MainPlayer();

        this.computer = new ComputerPlayer();
    }

    start()
    {
        this.stateMachine.start();
    }
}

