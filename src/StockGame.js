import React, { useEffect, useState } from "react";
import { ControlPanel } from "./ControlPanel";
import { Timeline } from "./Timeline";

import rawData from "./data";
import { parseCsv } from "./csvParser";

export function StockGame() {
    let [stockData, setStockData] = useState([]);

    useEffect(() => {
        setStockData(parseCsv(rawData));
    });

    return (
        <>
            <Timeline stockData={stockData} />
            <ControlPanel />
        </>
    );
}
