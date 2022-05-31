import IState from 'NTEngine/StateMachine/IState';
import GameStateMachine from './GameStateMachine';

export default interface IGameState extends IState
{
    gameStateMachine:GameStateMachine;
}