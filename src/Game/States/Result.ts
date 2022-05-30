import IState from 'NTEngine/StateMachine/IState';
import Game from '../Game';
import { GameData } from '../GameData/GameData';

export default class Result implements IState
{
    game:Game;
    
    constructor(game:Game)
    {
        this.game = game;
    }

    start()
    {
        this.evaluate();

        this.game.setState(this.game.startState);
    }

    end()
    {

    }

    evaluate()
    {
        let playerId = this.game.player.result.id;
        let computerId = this.game.computer.result.id;

       

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
        console.log("Player Wins!!");
        this.game.view.txtWin = "Player Wins!!";
        this.game.player.score += 1;
    }

    lose()
    {
        console.log("Computer Wins. Better Luck Next Time.");
        this.game.view.txtWin = "Computer Wins. Better Luck Next Time.";
        this.game.computer.score += 1;
    }

    draw()
    {
        console.log("Match Draw")
        this.game.view.txtWin = "Match Draw";

        this.game.player.score += 1;
        this.game.computer.score += 1;
    }

    update: () => void;
}