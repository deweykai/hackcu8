import React, { useEffect, useState } from "react";
import { ControlPanel } from "./ControlPanel";
import { Timeline } from "./Timeline";
import Grid from "@mui/material/Grid";

import rawData from "./data";
import { parseCsv } from "./csvParser";
import { Game } from "./gamestate";

const GameContext = React.createContext({
    game: new Game(),
    setGame: () => {},
});

export { GameContext };

export function StockGame() {
    let [game, setGame] = useState(new Game(parseCsv(rawData), 100));
    let value = { game, setGame };

    return (
        <GameContext.Provider value={value}>
            <Grid container>
                <Grid item xs={8}>
                    <Timeline />
                </Grid>
                <Grid item xs={4}>
                    <ControlPanel />
                </Grid>
            </Grid>
        </GameContext.Provider>
    );
}
