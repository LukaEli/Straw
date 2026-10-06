import { AUTO, Game, Scale, Types } from 'phaser';
import { Boot } from './scenes/Boot';
import { Game as MainGame } from './scenes/Game';

// Base resolution: the game always thinks it is 1280 x 720, then Scale.FIT
// shrinks or grows the canvas to fit the real screen.
const config: Types.Core.GameConfig = {
    type: AUTO,
    width: 1280,
    height: 720,
    backgroundColor: '#1a1a24',
    pixelArt: true, // keeps scaled-up pixel art sharp
    scale: {
        mode: Scale.FIT,
        autoCenter: Scale.CENTER_BOTH
    },
    physics: {
        default: 'arcade'
    },
    scene: [
        Boot,
        MainGame
    ]
};

const StartGame = (parent: string) => {
    return new Game({ ...config, parent });
}

export default StartGame;
