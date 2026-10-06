import { useLayoutEffect, useRef } from 'react';
import StartGame from '../game/main';

// The one place where React mounts the Phaser game.
// A main page can later be put in front of this component.
export function PhaserGame()
{
    const game = useRef<Phaser.Game | null>(null);

    useLayoutEffect(() =>
    {
        if (game.current === null)
        {
            game.current = StartGame('game-container');
        }

        // Runs when the component goes away: shut the game down cleanly
        return () =>
        {
            if (game.current)
            {
                game.current.destroy(true);
                game.current = null;
            }
        };
    }, []);

    return (
        <div id="game-container"></div>
    );
}
