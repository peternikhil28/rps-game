class LayoutData
{
    assetName:string;
    objects:ObjectData[];
}

class ObjectData{
    name:string;
    type:string;
    x:number;
    y:number;
    w:number;
    h:number;
    style:Style;
}

class Style{
    fill:string;
    fontSize:number;
}

export {LayoutData,ObjectData};