import Utils from "NTEngine/Utils";
import { LayoutData, ObjectData } from "./LayoutData";

export default class LayoutImporter
{
    assetFolder:string;
    layoutName:string;

    assetName:string

    scene:any

    _onLoadCallback:any;
    _onClickCallback:any;


    constructor(scene:any)
    {
        this.scene = scene;
    }

    // -- Load Layout --

    load(assetFolder:string, layoutName:string, callback:any = null)
    {
        this.assetFolder = assetFolder;
        this.layoutName = layoutName;
        this._onLoadCallback = callback;

        this.layoutScreen(Utils.getResource(this.assetFolder + this.layoutName + '_Layout.json').data);
    }

    layoutScreen(inData:any)
    {
        let data:LayoutData = Object.assign(new LayoutData(), inData);

        this.assetName = data.assetName;

        let objectDetails = inData.objects;

        for(let index=0; index<objectDetails.length; index++)
        {
            let objectData = objectDetails[index];

            let gameObject;

            switch (objectData.type)
            {
                case "Sprite":
                    gameObject = Utils.createSprite(this.assetFolder + this.assetName, objectData);
                    break;

                case "Button":
                    gameObject = Utils.createButton(this.assetFolder + this.assetName, objectData);
                    gameObject.addTouchListener(this.onButtonClicked.bind(this));
                    break;

                case "Text":
                    gameObject = Utils.createText(objectData);
                    break;
                    
                default:
                    gameObject = this.createCustomObject(objectData);
                    break;
            }
    
            if(gameObject!=null)
            {
                this.addChild(gameObject);
                this.onObjectCreated(gameObject, objectData);
            }
        }
    
        this.onLayoutComplete();
    }
    
    createCustomObject(objectData:ObjectData)
    {

    }

    onObjectCreated(object:any, objectData:ObjectData)
    {

    }

    addChild(gameObject:any)
    {
        this.scene.addChild(gameObject);
    }

    onLayoutComplete()
    {
        if(this._onLoadCallback)
            this._onLoadCallback();
    }

    onButtonClicked(target:any)
    {

    }
}