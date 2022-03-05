import React, { useContext } from "react";
import { GameContext } from "./StockGame";

export function Timeline() {
    let { game, setGame } = useContext(GameContext);

    let stockdata = game.stockdata;
    //return <h1>{parseCsv(data)}</h1>;
    return (
        <>
            <h1>Timeline</h1>
        </>
    );
}
