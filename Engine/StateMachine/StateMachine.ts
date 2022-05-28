import IState from 'Engine/StateMachine/IState';

export default class StateMachine
{
    state : IState
    constructor()
    {
        this.state = null;
    }

    setState(state : IState)
    {
        if(this.state)
            this.state.start();

        this.state = state;

        this.state.end();
    }
}