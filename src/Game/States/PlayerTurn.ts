import IState from 'Engine/StateMachine/IState';
import Game from '../Game';

export default class PlayerTurn implements IState
{
    game:Game;
    
    constructor(game:Game)
    {
        this.game = game;
    }

    start()
    {
        
    }

    end: () => void;
    update: () => void;
    
}