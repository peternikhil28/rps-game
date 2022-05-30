import IState from './IState';

export default class StateMachine
{
    state : IState
   
    setState(state : IState)
    {
        if(this.state)
            this.state.end();

        this.state = state;

        this.state.start();
    }
}