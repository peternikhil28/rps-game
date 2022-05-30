export default class App
{
    static app:any;
    static stage:any;

    static veiwport:PIXI.Rectangle = new PIXI.Rectangle();

    private static _wrapper:any;

    static load()
    {   
        this.app = new PIXI.Application({width:App.veiwport.width, height:App.veiwport.height, transparent:true, antialias:true}); 
        App.stage = this.app.stage;

        this._wrapper = document.createElement('div');
        this._wrapper.setAttribute("style", "width:" + App.veiwport.width + "px; height:" + App.veiwport.height + "px; position: fixed; left:50%;top:0; overflow: hidden; transform-origin: left top;");
        this._wrapper.appendChild(this.app.view);
        document.body.appendChild(this._wrapper);

        this.onWindowResize();
        window.addEventListener('resize', this.onWindowResize.bind(this));
    }

    static setViewport(width:number, height:number)
    {
        App.veiwport.width = width;
        App.veiwport.height = height;
    }

    static onWindowResize()
    {
        let width = window.innerWidth;
        let height = window.innerHeight;
        let scale = Math.min(width /  App.veiwport.width, height /  App.veiwport.height);
        this._wrapper.style.transform = 'scale(' + scale + ') translate(-50%, 0px)';
    }
}