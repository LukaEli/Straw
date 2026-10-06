import { Scene } from 'phaser';

// Empty for now. Later steps add the ground, platforms and player here.
export class Game extends Scene
{
    constructor ()
    {
        super('Game');
    }

    create ()
    {
        this.cameras.main.setBackgroundColor('#1a1a24');
    }
}
