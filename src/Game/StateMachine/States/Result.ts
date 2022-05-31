import IState from 'NTEngine/StateMachine/IState';
import { GameData } from '../../GameData/GameData';
import GameStateMachine from '../GameStateMachine';

export default class Result implements IState
{
    gameStateMachine: GameStateMachine;

    constructor(game:GameStateMachine)
    {
        this.gameStateMachine = game;
    }

    start()
    {
        this.evaluate();

        this.gameStateMachine.setState(this.gameStateMachine.startState);
    }

    end()
    {

    }

    evaluate()
    {
        let playerId = this.gameStateMachine.game.player.result.id;
        let computerId = this.gameStateMachine.game.computer.result.id;

       

        if(playerId === computerId)
            this.draw();
        else
        {
            let playData = GameData.getInstance().PlayData;
            playData.forEach(data => {

                if(playerId === data.id)
                {
                    if(computerId === data.win)
                        this.win();
                    else
                        this.lose();
                }
            });
        }
        
    }

    win()
    {
        this.gameStateMachine.game.view.txtWin = "Player Wins!!";
        this.gameStateMachine.game.player.score += 1;
    }

    lose()
    {
        this.gameStateMachine.game.view.txtWin = "Computer Wins. Better Luck Next Time.";
        this.gameStateMachine.game.computer.score += 1;
    }

    draw()
    {
        this.gameStateMachine.game.view.txtWin = "Match Draw";
    }

    update: () => void;
}