import IState from 'Engine/StateMachine/IState';
import Game from '../Game';

export default class Win implements IState
{
    game:Game;
    
    constructor(game:Game)
    {
        this.game = game;
    }

    start: () => void;
    end: () => void;
    update: () => void;
    
}