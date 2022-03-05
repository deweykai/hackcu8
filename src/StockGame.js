import React, { useEffect, useState } from "react";
import { ControlPanel } from "./ControlPanel";
import { Timeline } from "./Timeline";
import Grid from "@mui/material/Grid";

import rawData from "./data";
import { parseCsv } from "./csvParser";

export function StockGame() {
    let [stockData, setStockData] = useState([]);

    useEffect(() => {
        setStockData(parseCsv(rawData));
    }, []);

    return (
        <Grid container>
            <Grid item xs={8}>
                <Timeline stockData={stockData} />
            </Grid>
            <Grid item xs={4}>
                <ControlPanel />
            </Grid>
        </Grid>
    );
}
