import { ObjectData } from "./LayoutSystem/LayoutData";
import Button from "./UI/Button";

export default class Utils {

    
    static createSprite(assetPath:string, objectData:ObjectData)
    {
        let gameObject = new PIXI.Sprite();
        gameObject.name = objectData.name;
        gameObject.texture = this.getTexture(assetPath, objectData.name);
;        gameObject.position.set(objectData.x-objectData.w/2, objectData.y-objectData.h/2);
        return gameObject;
    }

    static createButton(assetPath:string, objectData:ObjectData)
    {
        let gameObject = new Button();
        gameObject.name = objectData.name;
        gameObject.texture = this.getTexture(assetPath, objectData.name);
;       gameObject.position.set(objectData.x-objectData.w/2, objectData.y-objectData.h/2);
        return gameObject;
    }
  
    static createText(objectData:ObjectData)
    {
        let gameObject = new PIXI.Text("", objectData.style);
        gameObject.name = objectData.name;
        gameObject.position.set(objectData.x-objectData.w/2, objectData.y-objectData.h/2);
        return gameObject;
    }
   
    static getTexture(assetPath:string, objectName:string):PIXI.Texture
    {
        let offsetID = "_0";
        let assetNum = 0;

        let texture;

        while(this.getResource(assetPath + offsetID + assetNum + ".json") !== undefined)
        {
            if (this.getResource(assetPath + offsetID + assetNum + ".json").textures[objectName + ".png"] !== undefined ||
                this.getResource(assetPath + offsetID + assetNum + ".json").textures[objectName + ".jpg"] !== undefined ||
                this.getResource(assetPath + offsetID + assetNum + ".json").textures[objectName + ".webp"] !== undefined)
            {
                texture =   this.getResource(assetPath + offsetID + assetNum + ".json").textures[objectName + ".png"] ||
                            this.getResource(assetPath + offsetID + assetNum + ".json").textures[objectName + ".jpg"] ||
                            this.getResource(assetPath + offsetID + assetNum + ".json").textures[objectName + ".webp"];
                break;
            }

            assetNum++;

            if(assetNum >= 10)
                offsetID = "_0";
        }

        if(texture === undefined)
            console.log("Texture Not Found : " + objectName);
        else
            return texture;
    }

    static getResource(resPath:string)
    {
        return PIXI.Loader.shared.resources[resPath];
    }

    static getRandomInt(min:number, max:number) // min and max both included
    {
        return Math.floor(Math.random() * (max - min + 1) ) + min;
    }

    static getRandomFloat(min:number, max:number) // min and max both included
    {
        return Math.random() * (max - min) + min;
    }
};