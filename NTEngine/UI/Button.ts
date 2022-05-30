enum ButtonStates {

    HOVER = "00",
    NORMAL = "01",
    PRESSED = "02",
    DISABLED = "03"
};

export default class Button extends PIXI.Sprite
{
    private _touchEnabled:boolean;
    private _buttonState:string;

    private _colorMatrix:any;

    private _onTouchCallback:any;

    constructor()
    {
        super();
       
        this._touchEnabled = true;

        this.buttonMode = true;
        this.interactive = true;

        this._buttonState = ButtonStates.NORMAL;

        this.addListeners();
    }

    addListeners()
    {
        this.on('mouseover', this.onMouseOver.bind(this));
        this.on('mouseout', this.onMouseOut.bind(this));

        this.on('pointerdown', this.onPointerDown.bind(this));
        this.on('pointerup', this.onPointerUp.bind(this));
    }

    onMouseOver()
    {
        if(!this._touchEnabled)
            return;

        this._buttonState = ButtonStates.HOVER;
        this.setState();
    }

    onMouseOut()
    {
        if(!this._touchEnabled)
            return;

        this._buttonState = ButtonStates.NORMAL;
        this.setState();
    }

    onPointerDown(event:any)
    {
        if(!this._touchEnabled)
            return;

        this._buttonState = ButtonStates.PRESSED;
        this.setState();

        event.stopPropagation ();
    }

    onPointerUp(event:any)
    {
        if(!this._touchEnabled)
            return;

        this._buttonState = ButtonStates.NORMAL;
        this.setState();

        event.stopPropagation ();

        this.invokeCallback();
    }

    addTouchListener(callback:any)
    {
        this._onTouchCallback = callback;
    }

    invokeCallback()
    {
        if(this._onTouchCallback !== undefined)
            this._onTouchCallback(this);
    }

    setState()
    {
        this.colorMatrix.reset();
    
        switch (this._buttonState)
        {
            case ButtonStates.HOVER :
                this.colorMatrix.brightness(1.5);
                break;

            case ButtonStates.NORMAL :
                this.colorMatrix.brightness(1);
                break;

            case ButtonStates.PRESSED :
                this.colorMatrix.brightness(0.5);
                break;

            case ButtonStates.DISABLED :
                this.colorMatrix.brightness(1);
                this.colorMatrix.greyscale(0.2);
                break;
        }
    }

    get colorMatrix()
    {
        if(this._colorMatrix === undefined)
        {
            this._colorMatrix = new PIXI.filters.ColorMatrixFilter();
            this.filters = this.filters || [];
            this.filters.push(this._colorMatrix);
        }

        return this._colorMatrix;
    }

    set touchEnabled(boolean)
    {
        this._touchEnabled = boolean;

        this.buttonMode = boolean;
        this.interactive = boolean;

        if(this._touchEnabled)
        {
            this._buttonState = ButtonStates.NORMAL;
        }
        else
        {
            this._buttonState = ButtonStates.DISABLED;
        }

        this.setState();
    }

    get touchEnabled()
    {
        return this._touchEnabled;
    }
}

