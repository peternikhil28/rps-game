import IState from './IState';

export default class StateMachine
{
    state : IState
    constructor()
    {
        this.state = null;
    }

    setState(state : IState)
    {
        state.start();

        this.state = state;
    }
}