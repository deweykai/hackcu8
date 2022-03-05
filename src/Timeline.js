import React, { useContext } from "react";
import { PlayerContext } from "./StockGame";

export function Timeline({ stockData }) {
    let { player, setPlayer } = useContext(PlayerContext);
    const click = () => {
        setPlayer("josh");
        console.log("click");
    };
    //return <h1>{parseCsv(data)}</h1>;
    return (
        <>
            {player}
            <h1 onClick={click}>Timeline</h1>
            <p>{stockData.length}</p>
        </>
    );
}
