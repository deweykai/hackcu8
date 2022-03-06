import React, { useEffect, useState } from "react";
import { ControlPanel } from "./ControlPanel";
import { Timeline } from "./Timeline";
import Grid from "@mui/material/Grid";

import rawData from "./data";
import { parseCsv } from "./csvParser";
import { Game } from "./gamestate";
import { Card } from "@mui/material";
import Box from "@mui/material/Box";

const GameContext = React.createContext({
    game: new Game(),
    setGame: () => {},
});

export { GameContext };

export function StockGame() {
    let [game, setGame] = useState(new Game(parseCsv(rawData), 100));
    let clone = Object.assign(Object.create(Object.getPrototypeOf(game)), game);
    console.log(clone);
    let value = { game: clone, setGame };

    return (
        <GameContext.Provider value={value}>
            <Box style={{ height: "100%" }} m="10px">
                <Grid container spacing={3} style={{ height: "100%" }}>
                    <Grid item xs={8}>
                        <Card variant="outlined" style={{ height: "100%", padding: "10px" }}>
                            <Timeline />
                        </Card>
                    </Grid>
                    <Grid item xs={4}>
                        <Card variant="outlined" style={{ height: "100%", padding: "10px" }}>
                            <ControlPanel />
                        </Card>
                    </Grid>
                </Grid>
            </Box>
        </GameContext.Provider>
    );
}
