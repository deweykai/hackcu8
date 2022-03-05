import React, { useEffect, useState } from "react";
import { ControlPanel } from "./ControlPanel";
import { Timeline } from "./Timeline";
import Grid from "@mui/material/Grid";

import rawData from "./data";
import { parseCsv } from "./csvParser";

const GameContext = React.createContext({
    game: new Game(),
    setGame: () => {},
});

export { GameContext };

export function StockGame() {
    let [stockData, setStockData] = useState([]);
    let [game, setGame] = useState(new Game());
    let value = { game, setGame };

    useEffect(() => {
        setStockData(parseCsv(rawData));
    }, []);

    return (
        <GameContext.Provider value={value}>
            <Grid container>
                <Grid item xs={8}>
                    <Timeline stockData={stockData} />
                </Grid>
                <Grid item xs={4}>
                    <ControlPanel />
                </Grid>
            </Grid>
        </GameContext.Provider>
    );
}
