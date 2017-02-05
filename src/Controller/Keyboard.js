import ProxyPlatform from '../Proxy/ProxyPlatform';
import {DIRECTION_NONE, DIRECTION_RIGHT, DIRECTION_LEFT} from '../Entity/Item';

export default class KeyboardController {

    _proxy: ProxyPlatform;

    constructor(game, proxy: ProxyPlatform) {
        this._proxy = proxy;
        this._game = game;

        window.addEventListener('keydown', this.keyDownEvent.bind(this));
    }

    keyDownEvent(event) {
        switch(event.code) {
            case 'KeyQ':
                //this._game.stepAnimation();
                break;
            case 'KeyD':
                //console.log(this._game._hashMap.getNearbyItems(this._proxy._platform));
                this._proxy.move(DIRECTION_RIGHT, DIRECTION_NONE);
                break;
            case 'KeyA':
                this._proxy.move(DIRECTION_LEFT, DIRECTION_NONE);
                break;
        }
    }

}