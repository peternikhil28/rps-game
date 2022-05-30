/* Created by Nikhil Peter on 9/29/2017 */

import App from './App';
import Scene from './Scene';

export default class SceneManager
{
    static loadScene(scene:Scene)
    {
        this.removeAllScenes();

        this.addScene(scene) 
    }

    static addScene(scene:Scene) 
    {
        App.stage.addChild(scene);

        scene.start();
    }

    static removeScene(scene:Scene) 
    {
        App.stage.removeChild(scene);
        scene.destroy();
    }

    private static removeAllScenes() 
    {
        while (App.stage.children.length > 0) {
            SceneManager.removeScene(App.stage[0]);
        }
    }
}