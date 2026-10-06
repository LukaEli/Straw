import { Scene } from 'phaser';

// Loads assets, then starts the Game scene. Nothing to load yet (we use rectangles).
export class Boot extends Scene
{
    constructor ()
    {
        super('Boot');
    }

    create ()
    {
        this.scene.start('Game');
    }
}
